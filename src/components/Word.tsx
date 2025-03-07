import React, { useRef } from 'react'
import './Word.scss'
import IconPlay from './Icon/IconPlay'
import { useContext } from 'react'
import DataContext from '../context/data'
import ThemeContext from '../context/theme'
import { ApiJson } from '../api'

type WordProps = {
    data: ApiJson
}
export default function Word({ data }:WordProps) {
    const audioNode = useRef<HTMLAudioElement>(null)

    const themeContext = useContext(ThemeContext)

    const audio = data.phonetics.find((anItem) => anItem.audio)

    const handleAudio = () => {
        if (audioNode.current && audioNode.current.hasAttribute('src')) {
            audioNode.current.play()
        } else {
            alert('No audio found')
        }
    }

    return (
        <div ns="word" className="word" mode={themeContext.darkMode && 'dark'}>
            <div className="word_stack">
                <div className="word_word">{data.word}</div>
                <div className="word_pronounce">{data.phonetic}</div>
            </div>
            <button className="word_icon-play" onClick={handleAudio} disabled={audio?.audio ? false : true}>
                <IconPlay></IconPlay>
                <audio ref={audioNode} src={audio && audio.audio}></audio>
            </button>
        </div>
    )
}