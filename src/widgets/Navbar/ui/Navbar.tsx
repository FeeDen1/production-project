import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "features/LangSwitcher";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal/Modal";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData)
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
        setIsAuthModal(false)
    }, [])

    if(authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.siteName}>
                    {t('Site name')}
                </div>
                <div className={cls.container}>
                    <div className={cls.switchers}>
                        <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onLogout}>
                            Выйти
                        </Button>
                        <LangSwitcher/>
                        <ThemeSwitcher/>
                    </div>

                </div>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}></LoginModal>

            </div>
        )
    }
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
                    <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onShowModal}>
                        Войти
                    </Button>
                    <LangSwitcher/>
                    <ThemeSwitcher/>
                </div>

            </div>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}></LoginModal>

        </div>
    );
};


