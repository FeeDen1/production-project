import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss"
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    RED = "red"
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink:FC<AppLinkProps> = (props: AppLinkProps) => {
    const {to, className, theme=AppLinkTheme.PRIMARY, children, ...otherProps} = props
    return (
        <Link to={to} {...otherProps} className={classNames(cls.AppLink, {[cls[theme]]: true}, [className])}>
            {children}
        </Link>
    );
};

