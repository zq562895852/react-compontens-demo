import React, { useContext, useState } from 'react';
import classNames from 'classnames';

import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'

export interface SubMenuProps {
    title: string;
    index?: string;
    className?: string;
    style?: React.CSSProperties;
}

const SubMenuItem: React.FC<SubMenuProps> = (props) => {
    const { className, title, style, index, children } = props;
    const context = useContext(MenuContext);
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index
    })

    const [menuOpen, setOpen] = useState(context.opened);
    // 切换菜单展开还是关闭
    const handClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpen(!menuOpen)
        // 点击的时候设置当前的索引，不然无法定位到具体的激活地方
        if (context.onSelect && typeof context.onSelect === 'function' && typeof index === 'string') {
            context.onSelect(index)
        }

    }
    let timer: any;
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault();
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }
    // 横向绑定hover事件，纵向绑定click事件
    const clickEvents = context.mode === 'vertical' ? {
        onClick: handClick
    } : {};
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) },
    } : {}
    const renderChildren = () => {
        // 动态添加类名
        const subMenuClasses = classNames('sub-menu submenu-item', {
            'menu-open': menuOpen
        })
        //  判断横向是hover展开，纵向是点击


        // 返回处理后的新组建
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, {
                    index: index + '-' + i
                })
                // return childElement;
            } else {
                console.error("must MenuItem");
            }
        })
        return (
            <ul className={subMenuClasses}>
                { childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} className={classes} style={style} {...hoverEvents}>
            <div className='submenu-title' {...clickEvents}>
                {title}
            </div>
            { renderChildren()}
        </li>
    );
}

SubMenuItem.displayName = "SubMenu";

export default SubMenuItem;