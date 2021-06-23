import { FC, InputHTMLAttributes, ReactElement } from 'react';
// 拼接类名的库
import classNames from 'classnames'
type InputSize = 'lg' | 'sm';


// Omit 忽略属性，第一个参数传入对应的泛型，第二个参数传入有忽略的属性
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    // 是否禁用
    disabled?: boolean;
    className?: string;
    // 大小, 自定义的size和原生定义的属性冲突了
    size?: InputSize;
    // icon?: IconProps;
    // prefix?: ReactElement;
    // 前缀
    suffix?: string | ReactElement;
    // 后缀
    append?: string | ReactElement;
}

// type InputNativeProps = React.InputHTMLAttributes<HTMLInputElement> & InputProps;

const Input: FC<InputProps> = (props) => {
    // 类名，前缀，后缀，
    const { disabled, className, size, suffix, append, ...resetProps } = props;
    const classes = classNames('input', className, {
        [`input-disabled`]: disabled,
        [`input-${size}`]: size
    })
    return (
        <div>
            { suffix && suffix}
            {/* 前缀 */}
            <input className={classes} disabled={disabled}  {...resetProps} />
            {/* 后缀 */}
            { append && append}
        </div>
    );
}


export default Input;