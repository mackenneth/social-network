import "./styles/index.scss";
import {useTheme} from "@/app/providers/theme-provider";
import {classNames} from "@/shared/lib/classNames";

export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {},[theme])}>
            Hello world
            <button onClick={toggleTheme}>
                Toggle {theme}
            </button>
        </div>
    )
}