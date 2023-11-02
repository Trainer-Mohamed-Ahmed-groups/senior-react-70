import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Nav() {
    const theme = useContext(ThemeContext)

    return (
        <div>Nav
            <button onClick={theme.changeTheme}>Change Theme</button>
        </div>
    )
}
