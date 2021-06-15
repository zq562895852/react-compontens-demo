import { useState, useEffect } from 'react';

// 自定义hook必须使用use开头
const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('click', updateMouse)
        return () => {
            document.removeEventListener('click', updateMouse)
        }
    }, [])
    return position;
}
export default useMousePosition