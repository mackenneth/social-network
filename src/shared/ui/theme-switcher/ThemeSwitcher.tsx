import {classNames} from "@/shared/lib/classNames";
import {useTheme} from "@/shared/lib/theme/useTheme";
import {Theme} from "@/shared/lib/theme/ThemeContext";
import LightThemeIcon from "@/shared/assets/icons/theme-light.svg";
import DarkThemeIcon from "@/shared/assets/icons/theme-night.svg";
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props

    const {theme, toggleTheme} = useTheme();

    return (
        <Button onClick={toggleTheme}
                className={classNames('', {}, [className])}
                variant={ButtonVariant.CLEAR}
        >
            {theme === Theme.DARK ? <LightThemeIcon fill="#D0D0D0"/> : <DarkThemeIcon fill="000"/>}
        </Button>
    )
}