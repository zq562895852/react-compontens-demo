import { FC, InputHTMLAttributes, ReactElement } from 'react';
declare type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    disabled?: boolean;
    className?: string;
    size?: InputSize;
    suffix?: string | ReactElement;
    append?: string | ReactElement;
}
declare const Input: FC<InputProps>;
export default Input;
