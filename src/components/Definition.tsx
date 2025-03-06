import { useContext } from 'react'
import React from 'react'
import DataContext from '../context/data'
import ThemeContext from '../context/theme'
import { Entry } from '../context/data'
import './Definition.scss'
// { pos: string, meaning: string[], synonyms: string[]}
type DefinitionProps = {
    definition: Entry,
}
export function Definition({definition}: DefinitionProps) {
    const senseList = definition.sense.map((d, index) => {
        return (<li key={index}><span>{d}</span></li>)
    })

    const hasSynonyms = definition.synonyms && definition.synonyms.length

    const synonymnsList = definition.synonyms
    ? definition.synonyms.map((d, index) => {
        return <div key={index}>{d}</div>
    })
    : null

    const hasExamples = definition.example && definition.example.length

    const exampleList = definition.example
    ? definition.example.map((d, index) => {
        return <div key={index}>"{d}"</div>
    })
    : null

    return <div ns="definition" className="definition">
        <div className="definition_meaning-separator">
                <div className="definition_pos">{definition.pos}</div>
                <div></div>
            </div>
        <div className="definition_meaning">
            <div className="definition_sep">Meaning</div>
            <ul className="definition_meaning-item">
                {senseList}
            </ul>
            {(hasExamples) &&
            (<div className="definition_example">
                {exampleList}
            </div>)
        }
        </div>
        
        {(hasSynonyms) &&
            (<div className="definition_synonyms">
                <div>Synonyms</div>
                {synonymnsList}
            </div>)
        }
    </div>
}

export default function DefinitionList() {
    const dataContext = useContext(DataContext)
    const active = dataContext.data[dataContext.activeEntryId]
    const themeContext = useContext(ThemeContext)
    const list = active.entry.map((anItem, index) => {
        return (<Definition definition={anItem} key={index}></Definition>)
    })

    return <div ns="definition" mode={themeContext.darkMode && 'dark'}>
        {list}
        <div className="definition_source">
            <div>Source</div>
            <div>{active.source}</div>
        </div>
    </div>
}