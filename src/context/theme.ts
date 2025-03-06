import { createContext } from "react";

type ThemeContextProps = {
    darkMode: boolean,
    font: 'Mono' | 'Serif' | 'Sans-Serif'
}

const ThemeContext = createContext<ThemeContextProps>({
    darkMode: false,
    font: 'Sans-Serif',
})

export default ThemeContext