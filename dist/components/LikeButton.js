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
import { useState } from 'react';
var LikeButton = function () {
    var _a = useState(0), like = _a[0], setLike = _a[1];
    return (_jsx("button", __assign({ onClick: function () { setLike(like + 1); } }, { children: like }), void 0));
};
export default LikeButton;
