import {classNames} from "@/shared/lib/classNames";
import {useState} from "react";
import cls from './Sidebar.module.scss'
import {SidebarButton} from "@/widgets/sidebar/ui/sidebar-button/SidebarButton";

interface SidebarProps {
    className?: string
}
export const Sidebar = (props: SidebarProps) => {
    const {className} = props

    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleIsCollapsed = () => {
       setIsCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.Sidebar_collapsed]: isCollapsed}, [className])}>
            <SidebarButton isCollapsed={isCollapsed}
                           toggleCollapsed={() => toggleIsCollapsed()}
                           className={isCollapsed ? cls.Sidebar__button_collapsed : cls.Sidebar__button_expanded}
            />
        </div>
    )
}