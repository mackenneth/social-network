import "./styles/index.scss";
import {classNames} from "@/shared/lib/classNames";
import {AppRouter} from "@/app/providers/router";
import {NavBar} from "@/widgets/nav-bar";
import {useTheme} from "@/shared/lib/theme/useTheme";
export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar/>
            <AppRouter/>
        </div>
    )
}