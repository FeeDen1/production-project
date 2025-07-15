import React, {Suspense} from "react";
import {PageError} from "widgets/PageError";
import {Loader} from "shared/ui/Loader/Loader";


interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}


class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error: Error) {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        const {hasError} = this.state
        const {children} = this.props
        if (hasError) {
            return (
                <Suspense fallback={<Loader/>}>
                    <PageError/>
                </Suspense>
            )
        }

        return children
    }
}

export default ErrorBoundary