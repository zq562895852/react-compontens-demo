import React, { HtmlHTMLAttributes } from 'react';
// 拼接类名的库
import classNames from 'classnames'
// 按钮的大小
export enum ButtonSize {
    Large = "lg",
    Small = "sm"
}

// 按钮的种类
export enum ButtonType {
    Primary = 'primary',
    Default = "default",
    Danger = "danger",
    Link = 'link'
}

export interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?: string;
    children: React.ReactNode
}

// 原生属性，但是button和a链接时不同的，所以做成可选属性
// 联合属性  &
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps;
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps;
// 变成可选属性Partial
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
    const { className, disabled, size, btnType, children, href, ...restProps } = props;
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        // link 如果是链接则添加的类名
        "disabled": (btnType === ButtonType.Link) && disabled
    })

    if (btnType === ButtonType.Link && href) {
        return (
            <a className={classes} href={href} {...restProps}>
                {children}
            </a>
        )
    } else {
        return (
            <button className={classes} disabled={disabled} {...restProps}> { children} </button>
        )
    }

}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button;