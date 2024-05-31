import { FC } from "react";
import ColorGroup, { ColorSelect } from "../utils/ColorGroup";

type PageSectionProps = {
    children?: React.ReactNode,
    colorGroup?: ColorGroup,
    title?: string,
    subtitle?: string,
    hasBottomBorder?: boolean
}
const PageSection: FC<PageSectionProps> = (props) => {
    const {colorGroup=ColorGroup.inherit,hasBottomBorder=true} = props;

    const pageSectionClasses = ColorSelect[colorGroup];
    const borderClasses = hasBottomBorder ? "border-b-2 border-b-gray":"";
    const titleDisplay = (<>
        <div className={`${pageSectionClasses.titleColorClass}`}>
            
            <h1 className="text-center text-5xl font-bold">
                {props.title}
            </h1>
            <br/>
            <h4 className="text-center text-xl font-semibold">{props.subtitle}</h4>
        </div>
        <br/>
        <br/>
        </>);
    
    return (
        <div className={`${pageSectionClasses.bgColorClass} ${borderClasses} py-5 md:py-14`}>
            {(props.title || props.subtitle) ? titleDisplay : null}
            <div className={`${pageSectionClasses.textColorClass}`}>
                {props.children}
            </div>
        </div>
    )
}

export default PageSection;