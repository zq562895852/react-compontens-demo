import React from 'react';
declare type SelectCallback = (index: string) => void;
declare type menuMode = 'vertical' | 'horizontal';
export interface MenuProps {
    mode?: menuMode;
    defaultIndex: string;
    className?: string;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    opened?: boolean;
}
export interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: menuMode;
    opened?: boolean;
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
