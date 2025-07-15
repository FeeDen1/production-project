import {classNames} from "shared/lib/classNames/classNames";
import {Button} from "shared/ui/Button/Button";
import {useEffect, useState} from "react";

interface BugButtonProps {
    className?: string
}

export const BugButton = ({className}: BugButtonProps) => {
    const [error, setError] = useState<boolean>(false)

    const throwErr = () => {
        setError(true)
    }

    useEffect(() => {
        if (error) {
            throw new Error()
        }

    }, [error]);

    return (
        <Button onClick={throwErr}>
            throw error
        </Button>
    );
};

