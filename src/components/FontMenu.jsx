import './FontMenu.scss'
import { useContext } from 'react'
import ThemeContext from '../context/theme'

export default function FontMenu({setFont}) {
    const themeContext = useContext(ThemeContext)

    return <div className="font-menu" ns="font-menu" mode={themeContext.darkMode && 'dark'}>
        <div onClick={() => setFont('Sans-Serif')}>Sans Serif</div>
        <div onClick={() => setFont('Serif')}>Serif</div>
        <div onClick={() => setFont('Mono')}>Mono</div>
    </div>
}