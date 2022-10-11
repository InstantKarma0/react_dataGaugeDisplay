import React, { useContext, useState } from "react";
import { themes, gaugeThemes } from "../constants/theme";
import { LocalStorageHandler } from "../services/LocalStorage";

const ThemeContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {

    LocalStorageHandler.init("theme", "light");
    LocalStorageHandler.init("gaugeTheme", "none")


    const [currentTheme, setCurrentTheme] = useState(themes[LocalStorageHandler.load("theme")]);
    const [gaugeTheme, setGaugeTheme] = useState(gaugeThemes[LocalStorageHandler.load("gaugeTheme")]);

    function toggleTheme() {
        if (currentTheme === themes.light) {
            setCurrentTheme(themes.dark)
            LocalStorageHandler.save("theme","dark")
        } else {
            setCurrentTheme(themes.light);
            LocalStorageHandler.save("theme", "light");

        }
    }

    function toggleGaugeTheme(color) {
        setGaugeTheme(gaugeThemes[color]);
        LocalStorageHandler.save("gaugeTheme", color);
    }

    return (
        <ThemeContext.Provider value={
            {theme: currentTheme, toggleTheme: toggleTheme,
            gaugeTheme: gaugeTheme, toggleGaugeTheme: toggleGaugeTheme}}>
            { children }
        </ThemeContext.Provider>
    )

}