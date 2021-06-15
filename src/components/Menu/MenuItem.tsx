import React, { useContext } from 'react';
import classNames from 'classnames';
// 上下文，
import { MenuContext } from './Menu'
// 选中的回调函数
type selectCallback = (index: string) => void;
// type menuMode = 'vertical' | 'horizontal'
export interface MenuItemProps {
    // 默认选中项
    index?: string;
    disabled?: boolean;
    className?: string;
    // React提供的css属性
    style?: React.CSSProperties;
    onSelect?: selectCallback;
}


const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { index, style, className, disabled, onSelect, children } = props;
    // 创建上下文对象
    const context = useContext(MenuContext);
    // 拼接类名
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        "is-active": index === context.index
    });
    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index)
        }
    }
    return (
        <li className={classes} style={style} onClick={handleClick}>
            { children}
        </li>
    )

}

MenuItem.defaultProps = {
    index: "0",
}

MenuItem.displayName = "MenuItem";

export default MenuItem;