import {classNames} from "@/shared/lib/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";
import cls from './AppLink.module.scss'

enum APP_LINK_THEME {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
interface AppLinkProps extends LinkProps {
    className?: string
    theme?: string
}
export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
    const {className, children, to, theme = APP_LINK_THEME.PRIMARY, ...otherProps} = props

    return (
        <Link className={classNames('AppLink', {}, [className, cls[theme]])}
              to={to}
              {...otherProps}
        >
            {children}
        </Link>
    )
}