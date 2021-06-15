import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('click', updateMouse)
        // 返回一个函数清除副作用
        return () => {
            document.removeEventListener('click', updateMouse)
        }
    }, [])//第二个参数是依赖变化执行，变化-空数组只执行一次
    return (
        <p>X: { position.x}    Y: { position.y}</p>
    )
}

export default MouseTracker;