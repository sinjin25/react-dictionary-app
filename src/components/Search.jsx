import './Search.scss'
import IconSearch from './Icon/IconSearch'
import { useContext } from 'react'
import DataContext from '../context/data'
import ThemeContext from '../context/theme'

export default function Search({handleSearch, value}) {
    const dataContext = useContext(DataContext)
    const themeContext = useContext(ThemeContext)
    const datalistJsx = 
    dataContext.data.map((anItem, index) => {
        return <option value={anItem.word} key={index}></option>
    })

    return (
    <>
        <div ns="search" className="search" mode={themeContext.darkMode ? 'dark' :''}>
            <input className='search_input w-100' list="words" placeholder="Search for any word"
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                value={value}
            />
            <div className="search_icon">
                <IconSearch ></IconSearch>
            </div>
        </div>
        <datalist id="words">{datalistJsx}</datalist>
    </>)
}