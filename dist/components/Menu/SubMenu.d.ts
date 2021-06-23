import React from 'react';
export interface SubMenuProps {
    title: string;
    index?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const SubMenuItem: React.FC<SubMenuProps>;
export default SubMenuItem;
