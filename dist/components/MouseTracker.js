import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
var MouseTracker = function () {
    var _a = useState({ x: 0, y: 0 }), position = _a[0], setPosition = _a[1];
    useEffect(function () {
        var updateMouse = function (e) {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('click', updateMouse);
        // 返回一个函数清除副作用
        return function () {
            document.removeEventListener('click', updateMouse);
        };
    }, []); //第二个参数是依赖变化执行，变化-空数组只执行一次
    return (_jsxs("p", { children: ["X: ", position.x, "    Y: ", position.y] }, void 0));
};
export default MouseTracker;
