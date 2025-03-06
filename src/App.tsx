import React from 'react'
import './App.scss'
import Top from './components/Top';
import Search from './components/Search';
import Word from './components/Word';
import Definition from './components/Definition';
import DataContext from './context/data';
import ThemeContext from './context/theme';
import { mockData } from './context/data'
import { useState, useContext } from 'react';

type DictionaryProps = {
    activeEntry: number,
    changeEntry: (id) => void,
    toggleDark: (id) => void,
    setFont: (str: 'Mono' | 'Serif' | 'Sans-Serif') => void,
}

function Dictionary({activeEntry, changeEntry, toggleDark, setFont}:DictionaryProps) {
    // use a map for bigger data sets
    const dataContext = useContext(DataContext)
    const themeContext = useContext(ThemeContext)
    const [inputValue, setInputValue] = useState('keyboard')

    const findActiveEntryByWord = (str: string) => {
        const lastId = activeEntry
        const id = dataContext.data.findIndex((i) => {
            return i.word === str
        })
        if (id === -1) return lastId
        return id
    }

    const handleSearch = (str: string) => {
        setInputValue(str)
        if (!str) return
        const id = findActiveEntryByWord(str)
        changeEntry(id)
    }

    return (
      
        <section id="app" mode={themeContext.darkMode && 'dark'} font={themeContext.font}>
            <Top toggleDark={toggleDark} setFont={setFont}></Top>
            <Search handleSearch={handleSearch} value={inputValue}></Search>
            <Word></Word>
            <Definition></Definition>
            
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
        <Dictionary activeEntry={activeEntry} changeEntry={changeEntry} toggleDark={toggleDark} setFont={setFont}></Dictionary>
    </DataContext>
    </ThemeContext>
}
