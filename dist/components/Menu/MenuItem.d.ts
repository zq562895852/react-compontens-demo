import React from 'react';
declare type selectCallback = (index: string) => void;
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onSelect?: selectCallback;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
