import {classNames} from "shared/lib/classNames/classNames";
import cls from './Input.module.scss';
import {InputHTMLAttributes, memo, useEffect, useRef} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    autoFocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {className, value, onChange, type='text', label, autoFocus , ...otherProps} = props;
    const ref = useRef<HTMLInputElement>(null);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    useEffect(() => {
        if(autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {label && <div className={cls.label}>
                {`${label}:`}
            </div>}
            <input ref={ref} className={cls.input} type={type} value={value} onChange={onChangeHandler} {...otherProps}/>
        </div>
    );
});

