
import cls from './LoginForm.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({className}: LoginFormProps) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                label="Имя пользователя"
                placeholder="Введите почту"
                autoFocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder="Введите пароль"
                label="Пароль"
            />
            <Button className={cls.loginBtn}>
                Войти
            </Button>
        </div>
    );
};

