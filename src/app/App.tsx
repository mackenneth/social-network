import "./styles/index.scss";
import {classNames} from "@/shared/lib/classNames";
import {AppRouter} from "@/app/providers/router";
import {NavBar} from "@/widgets/nav-bar";
import {useTheme} from "@/shared/lib/theme/useTheme";
import {Sidebar} from "@/widgets/sidebar";
import {Suspense} from "react";

export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={'loading...'}>
                <NavBar/>
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter className={'content'}/>
                </div>
            </Suspense>
        </div>
    )
}