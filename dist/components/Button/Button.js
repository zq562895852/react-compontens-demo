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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// 拼接类名的库
import classNames from 'classnames';
// 按钮的大小
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "lg";
    ButtonSize["Small"] = "sm";
})(ButtonSize || (ButtonSize = {}));
// 按钮的种类
export var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Default"] = "default";
    ButtonType["Danger"] = "danger";
    ButtonType["Link"] = "link";
})(ButtonType || (ButtonType = {}));
var Button = function (props) {
    var _a;
    var className = props.className, disabled = props.disabled, size = props.size, btnType = props.btnType, children = props.children, href = props.href, restProps = __rest(props, ["className", "disabled", "size", "btnType", "children", "href"]);
    var classes = classNames('btn', className, (_a = {},
        _a["btn-" + btnType] = btnType,
        _a["btn-" + size] = size,
        // link 如果是链接则添加的类名
        _a["disabled"] = (btnType === ButtonType.Link) && disabled,
        _a));
    if (btnType === ButtonType.Link && href) {
        return (_jsx("a", __assign({ className: classes, href: href }, restProps, { children: children }), void 0));
    }
    else {
        return (_jsxs("button", __assign({ className: classes, disabled: disabled }, restProps, { children: [" ", children, " "] }), void 0));
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
};
export default Button;
