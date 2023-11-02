import { createContext, useState } from "react";


export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    let changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;