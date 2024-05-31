import { FC, useContext } from "react";
import AppContext from "../contexts/AppContext";
import { NavLink } from "react-router-dom";

const ProfileDisplay: FC<{}> = () => {
    const appContext = useContext(AppContext);
    const isLoggedIn = appContext.user && appContext.user.username;

    const logoutHandler = () => {
        appContext.setUser({ username: "", firstname: "" });
    }

    return (
        <span className="text-white">
            {isLoggedIn && <span className="font-extralight mr-2 hidden sm:inline">Hi, {appContext.user.firstname}!</span>}
            <NavLink className={"hover:text-gray-light"} to={isLoggedIn ? "/" : "/login"} 
                onClick={isLoggedIn ? logoutHandler : () => { }}>
                <span className=""><i className="bi bi-person"></i></span> {isLoggedIn ? "Logout" : "Login"}
            </NavLink>
        </span>
    );
};

export default ProfileDisplay;
