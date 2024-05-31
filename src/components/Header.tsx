import { FC } from "react";

import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import ProfileDisplay from "./ProfileDisplay";

type HeaderProps = {
    children?: React.ReactNode
}
const HeaderBody: FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <header className="bg-positive-dark sticky top-0 z-10 flex-none">
            <nav className="flex flex-row mx-2 sm:mx-8 py-2 gap-x-10 sm:gap-x-8">
            <div className="ml-auto order-2 self-center">
                <span><DarkModeToggle/></span>
                <span className="ml-10"><ProfileDisplay/></span>
            </div>
                {props.children}
            </nav>
        </header>
    )
}

type HeaderLogoProps = {
    children?: React.ReactNode,
    linkto?: string,
    imgSrc: string,
    imgAlt: string,
    imgClass: string
}
const HeaderLogo: FC<HeaderLogoProps> = (props: HeaderLogoProps) => {
    const innerDisp = (
        <div className="flex flex-row gap-2">
            <img src={props.imgSrc} alt={props.imgAlt} className={props.imgClass} />
            <span className={`content-center text-white text-opacity-75 font-extrabold hidden lg:inline`}>{props.children}</span>
        </div>
    );

    //if linkto is provided, wrap around Link component
    let finalDisplay:React.ReactNode = props.linkto ? 
    (
        <Link to={props.linkto as string}>{innerDisp}</Link>
    ) : innerDisp;

    return (
        <span className="mr-5">
            {finalDisplay}
        </span>
    )
}

type HeaderLinkProps = {
    children?: React.ReactNode,
    to: string,
    iconClass: string
}
const HeaderLink: FC<HeaderLinkProps> = (props: HeaderLinkProps) => {
    return (
        <span className="content-center">
            <Link className="text-white hover:text-gray-light" to={props.to}>
                <i className={props.iconClass}></i>
                <span className="hidden sm:inline">
                    &nbsp;{props.children}
                </span>
            </Link>
        </span>
    )
}

const Header = {
    HeaderBody: HeaderBody,
    HeaderLogo: HeaderLogo,
    HeaderLink: HeaderLink
}

export default Header;