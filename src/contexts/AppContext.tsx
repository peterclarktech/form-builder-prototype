import React, { FC, createContext, useState } from "react";
import { DarkMode } from "../utils/ColorGroup";
import useUserDarkMode from "../hooks/useUserDarkMode";

//ApplicationContext
export type User = {
    username: string,
    firstname: string
}
export type AppContextObj = {
    darkmode: DarkMode,
    setDarkmode: (mode: DarkMode) => void,
    user: User,
    setUser: (user: User) => void
}
const initAppContext: AppContextObj = {
    darkmode: DarkMode.auto,
    setDarkmode: () => {},
    user: { username: "", firstname: "" },
    setUser: () => {}
}
const AppContext = createContext(initAppContext);


export default AppContext;


export const AppContextWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentDarkMode, setCurrentDarkMode] = useState<DarkMode>(DarkMode.auto);
    const [user, setUser] = useState<User>({username: "", firstname: ""});
    const userPrefDarkmode = useUserDarkMode();

    let currentContext:AppContextObj = {
        ...initAppContext,
        user: user,
        darkmode: currentDarkMode,
        setDarkmode: (mode) => setCurrentDarkMode(mode),
        setUser: (user: User) => {
            setUser(user);
        }
    }

    let darkClass = currentContext.darkmode === DarkMode.on || 
        (currentContext.darkmode === DarkMode.auto && userPrefDarkmode.isDarkMode) 
            ? "dark" : "";

    return (
        <AppContext.Provider value={currentContext}>
            <div className={darkClass}>
                {children}
            </div>
        </AppContext.Provider>
    )
}