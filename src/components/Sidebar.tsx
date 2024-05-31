import { FC, MouseEventHandler, createContext, useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import ColorGroup, { ColorSelect } from "../utils/ColorGroup"

type SidebarContextObj = {
    open: () => void,
    close: () => void,
    isOpen: boolean
}
const initSidebarContext: SidebarContextObj = {
    open: () => { },
    close: () => { },
    isOpen: true
}
const SidebarContext = createContext(initSidebarContext);

export type NavLinkItem = {
    to: string,
    text: string
}

type SidebarSectionProps = {
    title?: string,
    navlinks: Array<NavLinkItem>
}
const SidebarSection: FC<SidebarSectionProps> = ({ title, navlinks }) => {
    const [showLinks, setShowLinks] = useState(true);
    const sidebarcontext = useContext(SidebarContext);

    const navClickHandler = () => {
        sidebarcontext.close();
    }

    const mapToLink = (navItem: NavLinkItem, index: number) => {
        return (
            <li key={`nav_${title}_${index}_${navItem.text}`} >
                <NavLink className="font-bold" to={navItem.to} onClick={navClickHandler}>
                    <div className="w-full p-3 hover:shadow-inner-fill-gray rounded-md">{navItem.text}</div>
                </NavLink>
            </li>
        )
    }

    const handleTitleClick: MouseEventHandler = () => {
        setShowLinks((showLinks) => !showLinks);
    }

    const chevronClass = showLinks ? "bi bi-chevron-down" : "bi bi-chevron-right";

    return (
        <>
            {title && (
            <div className="text-lg font-bold p-2 rounded-md" onClick={handleTitleClick}>
                <a href="#"><span>{title} &nbsp; <i className={chevronClass}></i></span></a>
            </div>)}
            {showLinks && (
            <ul className="ml-2">
                {navlinks.map(mapToLink)}
            </ul>)}
            <hr className="my-2 text-opacity-70 dark:text-opacity-70" />
        </>
    )
}

type SidebarProps = {
    children?: React.ReactNode,
    title?: string,
    colorGroup?: ColorGroup,
}
const SidebarMain: FC<SidebarProps> = (props) => {
    const { children, title, colorGroup = ColorGroup.inherit } = props;
    const colorClasses = ColorSelect[colorGroup];

    const [showLinks, setShowLinks] = useState((window.innerWidth >= 1024));

    const sidebarcontext: SidebarContextObj = {
        close: () => { setShowLinks(false) },
        open: () => { setShowLinks(true) },
        isOpen: showLinks
    }

    const clickHamburgerHandler = () => {
        setShowLinks((showLinks) => !showLinks);
    }

    const linksClassNames = !showLinks ? "hidden lg:block" : "";

    const renderTitle = title && (
        <div className={`text-lg text-opacity-70 dark:text-opacity-70 font-bold ${colorClasses.titleColorClass}`}>
            {title}
            <span className="float-right lg:hidden"><button type="button" onClick={clickHamburgerHandler}><i className="bi bi-list"></i></button></span>
        </div>
    )

    return (
        <SidebarContext.Provider value={sidebarcontext}>
            <div className={`min-w-52 h-full px-10 py-5 ${colorClasses.textColorClass} ${colorClasses.bgColorClass}`}>
                {renderTitle}
                <div className={linksClassNames}>
                    <hr className="my-2" />
                    {children}
                </div>
            </div>
        </SidebarContext.Provider>
    )
}

const Sidebar = {
    Main: SidebarMain,
    Section: SidebarSection
}

export default Sidebar;