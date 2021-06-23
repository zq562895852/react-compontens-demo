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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
import Icon from '../Icon/Icon';
// import { Transition } from 'react-transition-group';
import Transition from '../Transiton/Transition';
var SubMenuItem = function (props) {
    var className = props.className, title = props.title, style = props.style, index = props.index, children = props.children;
    var context = useContext(MenuContext);
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    });
    var _a = useState(context.opened), menuOpen = _a[0], setOpen = _a[1];
    // 切换菜单展开还是关闭
    var handClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
        // 点击的时候设置当前的索引，不然无法定位到具体的激活地方
        if (context.onSelect && typeof context.onSelect === 'function' && typeof index === 'string') {
            context.onSelect(index);
        }
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    // 横向绑定hover事件，纵向绑定click事件
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handClick
    } : {};
    var hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); },
    } : {};
    var renderChildren = function () {
        // 动态添加类名
        var subMenuClasses = classNames('sub-menu submenu-item', {
            'menu-open': menuOpen
        });
        //  判断横向是hover展开，纵向是点击
        // 返回处理后的新组建
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, {
                    index: index + '-' + i
                });
                // return childElement;
            }
            else {
                console.error("must MenuItem");
            }
        });
        return (_jsx(Transition, __assign({ in: menuOpen, timeout: 500, animation: 'zoom-in-left' }, { children: _jsx("ul", __assign({ className: subMenuClasses }, { children: childrenComponent }), void 0) }), void 0));
    };
    return (_jsxs("li", __assign({ className: classes, style: style }, hoverEvents, { children: [_jsxs("div", __assign({ className: 'submenu-title' }, clickEvents, { children: [title, "  ", _jsx(Icon, { icon: "angle-down" }, void 0)] }), void 0), renderChildren()] }), index));
};
SubMenuItem.displayName = "SubMenu";
export default SubMenuItem;
