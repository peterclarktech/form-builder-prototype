import { FC } from "react";
import ColorGroup, { ColorSelect } from "../utils/ColorGroup";

export enum ButtonType {default,primary,positive,danger,disabled}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonType,
    children?: React.ReactNode
}
const Button: FC<ButtonProps> = (props) => {
    const { variant=ButtonType.default, children, ...htmlprops} = props;

    let colorClass = ColorSelect[ColorGroup.neutral];//ButtonType.default
    if (variant === ButtonType.primary) colorClass = ColorSelect[ColorGroup.accent];
    else if (variant === ButtonType.positive) colorClass = ColorSelect[ColorGroup.positive];
    else if (variant === ButtonType.danger) colorClass = ColorSelect[ColorGroup.danger];

    const hoverClasses = variant === ButtonType.disabled ? "" : "hover:drop-shadow dark:hover:drop-shadow-gray";

    return (
        <button disabled={variant === ButtonType.disabled} 
            className={`${colorClass.bgColorClass} ${colorClass.textColorClass} border border-gray-light dark:border-gray rounded-lg py-2 px-4 ${hoverClasses}`} 
            {...htmlprops}>
                {children}
        </button>
    )
}

export default Button;