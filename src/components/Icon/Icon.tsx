import React from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type ThemeProps = 'primary' | 'success' | 'info' | 'warning'

export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps
}


const Icon: React.FC<IconProps> = (props) => {
    const { className, theme, ...restProps } = props;
    // 拼接类名
    const classes = classNames('icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
}

export default Icon;