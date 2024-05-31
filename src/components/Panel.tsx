import { FC } from "react";
import ColorGroup, { ColorSelect } from "../utils/ColorGroup";

type PanelProps = {
    children?: React.ReactNode,
    colorGroup?: ColorGroup
}
const Panel: FC<PanelProps> = ({colorGroup = ColorGroup.invert, children}) => {
    const colorSelector = ColorSelect[colorGroup];

    return (
        <div className={`${colorSelector.bgColorClass} ${colorSelector.textColorClass} 
            max-w-5xl mx-auto p-5 sm:p-10 border-0 rounded-3xl shadow-2xl`}>
            <div className="content-center">
                {children}
            </div>
        </div>
    )
}

export default Panel;