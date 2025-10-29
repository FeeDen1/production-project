import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {RoutePath} from "app/providers/router/routerConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg"
import AboutIcon from "shared/assets/icons/about.svg"

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const {t} = useTranslation()
    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>

            <Button data-testid="sidebar-toggle" onClick={onToggle} className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED} size={ButtonSize.L}
                square={true}>{collapsed ? '>' : '<'}
            </Button>
            <div className={cls.links}>
                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>{t('Main page')}</span>
                </AppLink>
                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t('About page')}</span>
                </AppLink>
            </div>
        </div>
    );
};

