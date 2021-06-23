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
import "./style/index.scss";
import MenuDemo from './examples/MenuDemo';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import IconDemo from './examples/IconDemo';
import ButtonDemo from './examples/ButtonDemo';
import InputDemo from './examples/InputDemo';
library.add(fas);
function App() {
    return (_jsxs("div", __assign({ className: "App", style: { padding: '20px' } }, { children: [_jsx(MenuDemo, {}, void 0),
            _jsx(IconDemo, {}, void 0),
            _jsx(ButtonDemo, {}, void 0),
            _jsx(InputDemo, {}, void 0)] }), void 0));
}
export default App;
