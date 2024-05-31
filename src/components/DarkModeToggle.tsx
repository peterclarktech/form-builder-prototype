import { FC, MouseEventHandler, useContext } from "react"
import AppContext from "../contexts/AppContext"
import { DarkMode } from "../utils/ColorGroup";

const DarkModeToggle: FC<{}> = () => {
    const appContext = useContext(AppContext);

    let iconClass = "bi bi-circle-half"
    if (appContext.darkmode == DarkMode.on)
        iconClass = "bi bi-moon-stars-fill";
    else if (appContext.darkmode == DarkMode.off)
        iconClass = "bi bi-brightness-high-fill";

    const handleClick: MouseEventHandler = () => {
        if (appContext.darkmode == DarkMode.auto)
            appContext.setDarkmode(DarkMode.on)
        else if (appContext.darkmode == DarkMode.on)
            appContext.setDarkmode(DarkMode.off)
        else
            appContext.setDarkmode(DarkMode.auto)
    }

    return (
        <button type="button" className="text-white hover:text-gray-light" onClick={handleClick}>
            <i className={iconClass}></i>
        </button>
    )
}

export default DarkModeToggle;