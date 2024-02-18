import {classNames} from "@/shared/lib/classNames";
import RadioCheckedIcon from "@/shared/assets/icons/radio-checked.svg";
import RadioUncheckedIcon from "@/shared/assets/icons/radio-unchecked.svg"
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
interface SidebarButtonProps {
    className?: string
    isCollapsed: boolean
    toggleCollapsed: () => void
}
export const SidebarButton = (props: SidebarButtonProps) => {
    const {className} = props

    return (
        <Button className={classNames('', {}, [className])}
                variant={ButtonVariant.CLEAR}
                onClick={() => props.toggleCollapsed()}
        >
            {props.isCollapsed ? <RadioUncheckedIcon/> : <RadioCheckedIcon/>}
        </Button>
    )
}