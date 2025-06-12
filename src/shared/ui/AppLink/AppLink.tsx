import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

interface AppLinkProps extends LinkProps {
    className?: string
}

export const AppLink:FC<AppLinkProps> = (props: AppLinkProps) => {
    const {to, className, children, ...otherProps} = props
    return (
        <Link to={to} {...otherProps} className={classNames(cls.AppLink, {}, [className])}>
            {children}
        </Link>
    );
};

