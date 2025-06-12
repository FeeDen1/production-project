
import {PathRouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


export enum APP_ROUTES {
    MAIN= 'main',
    ABOUT = 'about'
}


export const RoutePath: Record<APP_ROUTES, string> = {
    [APP_ROUTES.MAIN]: '/',
    [APP_ROUTES.ABOUT]: '/about'
}

export const routeConfig: Record<APP_ROUTES, PathRouteProps> = {
    [APP_ROUTES.MAIN]: {
        path: RoutePath[APP_ROUTES.MAIN],
        element: <MainPage/>
    },
    [APP_ROUTES.ABOUT]: {
        path: RoutePath[APP_ROUTES.ABOUT],
        element: <AboutPage/>
    }
}