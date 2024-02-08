import {RouteProps} from "react-router-dom";
import {AppRoutes, RoutePaths} from "@/shared/config/route-config/routeConfig";
import {MainPage} from "@/pages/main-page";
import {AboutPage} from "@/pages/about-page";

export const routerConfig: Array<RouteProps> = [
    {
        path: RoutePaths.main,
        element: <MainPage/>
    },
    {
        path: RoutePaths.about,
        element: <AboutPage/>
    }
]