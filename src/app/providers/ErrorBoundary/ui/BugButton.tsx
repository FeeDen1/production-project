import {Button} from "shared/ui/Button/Button";
import {useEffect, useState} from "react";

export const BugButton = () => {
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

