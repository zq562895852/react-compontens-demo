import { useState, useEffect } from 'react';
// 自定义hook必须使用use开头
var useMousePosition = function () {
    var _a = useState({ x: 0, y: 0 }), position = _a[0], setPosition = _a[1];
    useEffect(function () {
        var updateMouse = function (e) {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('click', updateMouse);
        return function () {
            document.removeEventListener('click', updateMouse);
        };
    }, []);
    return position;
};
export default useMousePosition;
