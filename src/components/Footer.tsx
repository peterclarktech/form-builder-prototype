import { FC } from "react";

type FooterProps = {
    children?: React.ReactNode
}
const Footer: FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer className="flex-none flex flex-row bg-gray-dark text-gray h-14 w-full">
            <div className="mx-2 sm:mx-8 content-center">
                {props.children}
            </div>
        </footer>
    )
}

export default Footer;