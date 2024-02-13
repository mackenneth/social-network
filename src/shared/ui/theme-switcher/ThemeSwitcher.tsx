import {classNames} from "@/shared/lib/classNames";
import {useTheme} from "@/shared/lib/theme/useTheme";
import {Theme} from "@/shared/lib/theme/ThemeContext";
import LightThemeIcon from "@/shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "@/shared/assets/icons/theme-night.svg";
interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props

    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme} className={classNames('ThemeSwitcher', {}, [className])}>
            {theme === Theme.DARK ? <LightThemeIcon fill="#D0D0D0"/> : <DarkThemeIcon fill="000"/>}
        </button>
    )
}