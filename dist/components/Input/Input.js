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
// type InputNativeProps = React.InputHTMLAttributes<HTMLInputElement> & InputProps;
var Input = function (props) {
    var _a;
    // 类名，前缀，后缀，
    var disabled = props.disabled, className = props.className, size = props.size, suffix = props.suffix, append = props.append, resetProps = __rest(props, ["disabled", "className", "size", "suffix", "append"]);
    var classes = classNames('input', className, (_a = {},
        _a["input-disabled"] = disabled,
        _a["input-" + size] = size,
        _a));
    return (_jsxs("div", { children: [suffix && suffix, _jsx("input", __assign({ className: classes, disabled: disabled }, resetProps), void 0), append && append] }, void 0));
};
export default Input;
