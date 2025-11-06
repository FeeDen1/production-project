import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "features/LangSwitcher";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal/Modal";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])
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
                    <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onToggleModal}>
                        Войти
                    </Button>
                    <LangSwitcher/>
                    <ThemeSwitcher/>
                </div>

            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>ППАПАВПВАПВАПВАПВПВпв</Modal>

        </div>
    );
};


