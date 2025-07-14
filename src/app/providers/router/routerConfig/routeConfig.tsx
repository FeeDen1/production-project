
import {PathRouteProps} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {MainPage} from "pages/MainPage";



export enum APP_ROUTES {
    MAIN= 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}


export const RoutePath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: '/about',
    [APP_ROUTES.NOT_FOUND]: '*'
}

export const routeConfig: Record<APP_ROUTES, PathRouteProps> = {
    [APP_ROUTES.MAIN]: {
        path: RoutePath[APP_ROUTES.MAIN],
        element: <MainPage/>
    },
    [APP_ROUTES.ABOUT]: {
        path: RoutePath[APP_ROUTES.ABOUT],
        element: <AboutPage/>
    },
    [APP_ROUTES.NOT_FOUND]: {
        path: RoutePath[APP_ROUTES.NOT_FOUND],
        element: <NotFoundPage/>
    },
}