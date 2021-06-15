import React, { createContext, useState } from 'react';
import classNames from 'classnames';

import { MenuItemProps } from './MenuItem'
// 选中的回调函数
type SelectCallback = (index: string) => void;
type menuMode = 'vertical' | 'horizontal'
export interface MenuProps {
    mode?: menuMode;
    // 默认选中项
    defaultIndex: string;
    // disabled: boolean;
    className?: string;
    // React提供的css属性
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    opened?: boolean;  // 子菜单默认是否展开
}
export interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: menuMode;
    opened?: boolean; //默认是否展开
}
export const MenuContext = createContext<IMenuContext>({ index: "0" })
const Menu: React.FC<MenuProps> = (props) => {
    const { defaultIndex, style, className, opened, mode, onSelect, children } = props;
    // 当前选中的菜单索引
    const [currentIndex, setActive] = useState(defaultIndex);
    // 拼接类名
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical'
    });
    const handleClick = (index: string) => {
        setActive(index)
        if (onSelect && typeof onSelect === 'function') {
            onSelect(index);
        }
    }
    const currentContext: IMenuContext = {
        index: currentIndex ? currentIndex : "0",
        onSelect: handleClick,
        mode,
        opened
    }
    // 渲染子组件
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            // MenuItem类型的组件，所以传入MenuItem的props
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const { displayName } = childElement.type;
            if (displayName === 'MenuItem' || displayName === "SubMenu") {
                // 克隆组件可以修改子组件的属性，这里的index采用传入的方式可以不用手动传入
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                // 不是MenuItem组件
                console.error("子元素，不是MenuItem类型组件")
            }
        })
    }

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={currentContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )

}

Menu.defaultProps = {
    defaultIndex: "0",
    // 垂直
    mode: 'vertical'
}


export default Menu;