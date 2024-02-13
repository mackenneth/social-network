import {classNames} from "@/shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "@/shared/ui/app-link/AppLink";
import {RoutePaths} from "@/shared/config/route-config/routeConfig";
import {ThemeSwitcher} from "@/shared/ui/theme-switcher/ThemeSwitcher";
interface NavBarProps {
    className?: string
}
export const NavBar = (props: NavBarProps) => {
    const {className} = props

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink to={RoutePaths.main}>Home</AppLink>
            <AppLink to={RoutePaths.about}>About</AppLink>
            <ThemeSwitcher />
        </div>
    )
}

