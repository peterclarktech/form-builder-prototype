import { useEffect, useState } from "react";

const useUserDarkMode = () : {isDarkMode: boolean} => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        let initState = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(initState);

        const listener = (event:MediaQueryListEvent) => {
            setIsDarkMode(event.matches);
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
        }
    },[]);

    return {
        isDarkMode: isDarkMode
    }
}

export default useUserDarkMode;