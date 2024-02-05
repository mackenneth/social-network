import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeHook {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeHook => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const updatedTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(updatedTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, updatedTheme);
    }

    return {
        theme,
        toggleTheme
    }
}