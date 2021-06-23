var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({ index: "0" });
var Menu = function (props) {
    var defaultIndex = props.defaultIndex, style = props.style, className = props.className, opened = props.opened, mode = props.mode, onSelect = props.onSelect, children = props.children;
    // 当前选中的菜单索引
    var _a = useState(defaultIndex), currentIndex = _a[0], setActive = _a[1];
    // 拼接类名
    var classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical'
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect && typeof onSelect === 'function') {
            onSelect(index);
        }
    };
    var currentContext = {
        index: currentIndex ? currentIndex : "0",
        onSelect: handleClick,
        mode: mode,
        opened: opened
    };
    // 渲染子组件
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            // MenuItem类型的组件，所以传入MenuItem的props
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === "SubMenu") {
                // 克隆组件可以修改子组件的属性，这里的index采用传入的方式可以不用手动传入
                return React.cloneElement(childElement, {
                    index: index.toString()
                });
            }
            else {
                // 不是MenuItem组件
                console.error("子元素，不是MenuItem类型组件");
            }
        });
    };
    return (_jsx("ul", __assign({ className: classes, style: style }, { children: _jsx(MenuContext.Provider, __assign({ value: currentContext }, { children: renderChildren() }), void 0) }), void 0));
};
Menu.defaultProps = {
    defaultIndex: "0",
    // 垂直
    mode: 'vertical'
};
export default Menu;
