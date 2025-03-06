import './Top.scss'
import IconLogo from './Icon/IconLogo'
import IconMoon from './Icon/IconMoon'
import IconDownArrow from './Icon/IconDownArrow'
import FontMenu from './FontMenu'
import { useContext } from 'react'
import ThemeContext from '../context/theme'

export default function Top({toggleDark, setFont}) {
    // probably need to use this as context
    const themeContext = useContext(ThemeContext)

    let topSwitchClasses = "top_switch"
    if (themeContext.darkMode) topSwitchClasses += ' --on'

    return (<div ns="top" className="top" mode={themeContext.darkMode && 'dark'} font={themeContext.font}>
        <div className='top_icon'>
            <IconLogo></IconLogo>
        </div>
        <div className='top_right-grid'>
            <div className='top_font-select'>
                <div>{themeContext.font}</div>
            </div>
            <div className='top_down-arrow'>
                <IconDownArrow></IconDownArrow>
                <div className="top_click-assist">
                    <FontMenu setFont={setFont}></FontMenu>
                </div>
            </div>
            <div className="top_separator"></div>
            <div className={topSwitchClasses} onClick={toggleDark}>
                <div className='top_switch-ball'></div>
            </div>
            <div style={{width: '20px'}}>
                <IconMoon></IconMoon>
            </div>
        </div>
    </div>)
}