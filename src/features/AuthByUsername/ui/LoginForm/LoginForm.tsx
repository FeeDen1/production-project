
import cls from './LoginForm.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice";
import {getLoginState} from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import {Text} from "shared/ui/Text/Text";
import {TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {

    const dispatch = useDispatch();
    const {username, password, isLoading, error} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))

    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title="Форма авторизации"/>
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Input
                type="text"
                className={cls.input}
                label="Имя пользователя"
                placeholder="Введите почту"
                onChange={onChangeUsername}
                autoFocus
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder="Введите пароль"
                label="Пароль"
                onChange={onChangePassword}
                value={password}
            />
            <Button className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
                Войти
            </Button>
        </div>
    );
});

