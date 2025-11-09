import cls from './Modal.module.scss';
import {memo, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {Portal} from "shared/ui/Portal/Portal";
import {useTheme} from "shared/lib/themeContext/useTheme";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = memo((props: ModalProps) => {
    const {className, children, onClose, isOpen, lazy} = props
    const {theme} = useTheme();
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 300)
        }
    }, [onClose])

    const onContentClick = useCallback((e:React.MouseEvent) => {
        e.stopPropagation();
    },[]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if(isOpen) {
            setIsMounted(true);
        } else {
            setIsMounted(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown]);

    const mods: Record<string,boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    if(lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
});

