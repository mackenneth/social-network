import {classNames} from "@/shared/lib/classNames";
import {ButtonHTMLAttributes, FC} from "react";
import cls from "./Button.module.scss";

export enum ButtonVariant {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, variant, children, ...other} = props

    return (
        <button className={classNames(cls.Button, {}, [className, cls[props.variant]])}
                {...other}
        >
            {children}
        </button>
    )
}