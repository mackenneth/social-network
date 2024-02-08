import "./styles/index.scss";
import {useTheme} from "@/app/providers/theme-provider";
import {classNames} from "@/shared/lib/classNames";
import {AppRouter} from "@/app/providers/router";
export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {},[theme])}>
            Hello world
            <button onClick={toggleTheme}>
                Toggle {theme}
            </button>
            <AppRouter/>
        </div>
    )
}