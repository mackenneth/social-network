import "./styles/index.scss";
import {classNames} from "@/shared/lib/classNames";
import {AppRouter} from "@/app/providers/router";
import {NavBar} from "@/widgets/nav-bar";
export const App = () => {

    return (
        <div className={classNames('app', {})}>
            <NavBar/>
            <AppRouter/>
        </div>
    )
}