import './Word.scss'
import IconPlay from './Icon/IconPlay'
import { useContext } from 'react'
import DataContext from '../context/data'
import ThemeContext from '../context/theme'
export default function Word() {
    const dataContext = useContext(DataContext)
    const themeContext = useContext(ThemeContext)
    const active = dataContext.data[dataContext.activeEntryId]

    const handleAudio = () => {
        alert('This project did not include sample audio files :(')
    }

    return (
        <div ns="word" className="word" mode={themeContext.darkMode && 'dark'}>
            <div className="word_stack">
                <div className="word_word">{active.word}</div>
                <div className="word_pronounce">{active.pronounce}</div>
            </div>
            <div className="word_icon-play" onClick={handleAudio}>
                <IconPlay></IconPlay>
            </div>
        </div>
    )
}