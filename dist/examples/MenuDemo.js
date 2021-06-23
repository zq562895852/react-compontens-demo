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
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/Menu/MenuItem';
import SubMenu from '../components/Menu/SubMenu';
function MenuDemo() {
    return (_jsx("div", __assign({ className: "App", style: { padding: '20px' } }, { children: _jsxs(Menu, __assign({ defaultIndex: "0", mode: 'horizontal' }, { children: [_jsx(MenuItem, { children: "0000" }, void 0),
                _jsx(MenuItem, { children: "11111" }, void 0),
                _jsxs(SubMenu, __assign({ title: "dropDown" }, { children: [_jsx(MenuItem, { children: " dropDown-11111" }, void 0),
                        _jsx(MenuItem, { children: " dropDown-11111" }, void 0)] }), void 0),
                _jsx(MenuItem, { children: "2222" }, void 0),
                _jsx(MenuItem, { children: "3333" }, void 0)] }), void 0) }), void 0));
}
export default MenuDemo;
