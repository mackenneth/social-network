import "./styles/index.scss";
import {useTheme} from "@/app/providers/theme-provider";
import {classNames} from "@/shared/lib/classNames";
import {AppRouter} from "@/app/providers/router";
import {NavBar} from "@/widgets/nav-bar";
export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {},[theme])}>
            <NavBar/>
            <button onClick={toggleTheme}>
                Toggle {theme}
            </button>
            <AppRouter/>
        </div>
    )
}