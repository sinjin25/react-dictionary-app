import React, { useRef } from 'react'
import './App.scss'
import Top from './components/Top';
import Search from './components/Search';
import Word from './components/Word';
import Definition from './components/Definition';
import DataContext from './context/data';
import ThemeContext from './context/theme';
import { mockData } from './context/data'
import { useState, useContext, useEffect } from 'react';
import { ApiJson, fetchData, MOCK_DATA } from './api';
import NoResults from './components/NoResults';

type DictionaryProps = {
    toggleDark: (id) => void,
    setFont: (str: 'Mono' | 'Serif' | 'Sans-Serif') => void,
}

/* let timeoutId = -1 */
function Dictionary({toggleDark, setFont}:DictionaryProps) {
    // use a map for bigger data sets
    const themeContext = useContext(ThemeContext)
    const [inputValue, setInputValue] = useState('keyboard')
    const [data, setData] = useState<ApiJson>(MOCK_DATA)
    const [wordFound, setWordFound] = useState(true)
    const timeoutId = useRef(-1) // { current: [], reactiveshit }
    
    const handleSearch = (str: string) => {
        clearTimeout(timeoutId.current)

        setInputValue(str)
        if (!str) return

        timeoutId.current = window.setTimeout(() => {
            fetchData(str)
            .then((r) => {
                console.log('fetched', r)
                if (r[0] && 'word' in r[0]) {
                    setData(r[0])
                    setWordFound(true)
                } else {
                    setWordFound(false)
                }
                
            })
        }, 600)
    }

    return (
        <section id="app" mode={themeContext.darkMode && 'dark'} font={themeContext.font}>
            <Top toggleDark={toggleDark} setFont={setFont}></Top>
            <Search handleSearch={handleSearch} value={inputValue}></Search>
            {
                wordFound
                ? <>
                    <Word data={data}></Word>
                    <Definition data={data}></Definition>
                </>
                : <NoResults></NoResults>
            }
        </section>
      
    );
}

export default function App() {
    const [activeEntry, setActiveEntry] = useState(0)
    const [darkMode, setDarkMode] = useState(false)
    const [font, setFont] = useState<'Mono'|'Serif'|'Sans-Serif'>('Sans-Serif')
    const changeEntry = (id: number) => {
        setActiveEntry(id)
    }
    const toggleDark = () => {
        setDarkMode(f => !f)
    }

    //wrapper necessary because you can't set and then use the data from the changed Context (cuz of the snapshot)
    return <ThemeContext value={{
        darkMode: darkMode,
        font: font,
    }}>
        <DataContext value={{
        activeEntryId: activeEntry,
        data: mockData,
      }}>
        <Dictionary toggleDark={toggleDark} setFont={setFont}></Dictionary>
    </DataContext>
    </ThemeContext>
}
