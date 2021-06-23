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
import Button, { ButtonType } from '../components/Button/Button';
function ButtonDemo() {
    return (_jsx(Button, __assign({ btnType: ButtonType.Danger }, { children: "\u5371\u9669" }), void 0));
}
export default ButtonDemo;
