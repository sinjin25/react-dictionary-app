import { useContext } from 'react'
import React from 'react'
import DataContext from '../context/data'
import ThemeContext from '../context/theme'
import './Definition.scss'
import { ApiJson } from '../api'

type DefinitionListProps = {
    data: ApiJson
}
type DefinitionProps = {
    data: ApiJson['meanings'][number],
}
export function Definition({data}: DefinitionProps) {
    const senseList = data.definitions.map((d, index) => {
        return (<li key={index}>
            <div><span>{d.definition}</span></div>
            {
                d.example &&
                <div className="definition_example">"{d.example}"</div>
            }
        </li>)
    })

    const hasSynonyms = data.synonyms && data.synonyms.length

    const synonymnsList = data.synonyms
    ? data.synonyms.map((d, index) => {
        return <div key={index}>{d}</div>
    })
    : null

    return <div ns="definition" className="definition">
        <div className="definition_meaning-separator">
                <div className="definition_pos">{data.partOfSpeech}</div>
                <div></div>
            </div>
        <div className="definition_meaning">
            <div className="definition_sep">Meaning</div>
            <ul className="definition_meaning-item">
                {senseList}
            </ul>
        </div>
        
        {(hasSynonyms)
            ? (<div className="definition_synonyms">
                <div>Synonyms</div>
                {synonymnsList}
            </div>)
            : null
        }
    </div>
}

export default function DefinitionList({data}:DefinitionListProps) {
    const dataContext = useContext(DataContext)
    const active = dataContext.data[dataContext.activeEntryId]
    const themeContext = useContext(ThemeContext)
    /* const list = active.entry.map((anItem, index) => {
        return (<Definition definition={anItem} key={index} data={data}></Definition>)
    }) */
    const list = data.meanings.map((anItem, index) => {
        return (<Definition key={index} data={anItem}></Definition>)
    })

    return <div ns="definition" mode={themeContext.darkMode && 'dark'}>
        {list}
        <div className="definition_source">
            <div>Source</div>
            <div>{active.source}</div>
        </div>
    </div>
}