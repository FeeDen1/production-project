import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "features/LangSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.siteName}>
                {t('Site name')}
            </div>
            <div className={cls.container}>
                <div className={cls.links}>
                    <AppLink to={'/'}>
                        {t('Main page')}
                    </AppLink>
                    <AppLink to={'/about'}>
                        {t('About us')}
                    </AppLink>
                </div>
                <div className={cls.switchers}>
                    <LangSwitcher/>
                    <ThemeSwitcher/>
                </div>

            </div>

        </div>
    );
};


