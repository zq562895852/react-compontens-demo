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
import { useContext } from 'react';
import classNames from 'classnames';
// 上下文，
import { MenuContext } from './Menu';
var MenuItem = function (props) {
    var index = props.index, style = props.style, className = props.className, disabled = props.disabled, onSelect = props.onSelect, children = props.children;
    // 创建上下文对象
    var context = useContext(MenuContext);
    // 拼接类名
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        "is-active": index === context.index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index);
        }
    };
    return (_jsx("li", __assign({ className: classes, style: style, onClick: handleClick }, { children: children }), void 0));
};
MenuItem.defaultProps = {
    index: "0",
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
