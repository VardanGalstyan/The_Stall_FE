import React, { useState } from 'react'
import './searchBar.css'
import { IoFilter } from 'react-icons/io5'
import { BsSearch } from 'react-icons/bs'
import { ImRadioUnchecked, ImRadioChecked2 } from 'react-icons/im'
import { MdCancel } from 'react-icons/md'

function SearchBar() {

    const [isActive, setIsActive] = useState(false)
    const [isStableChecked, setIsStableChecked] = useState(false)
    const [isHorseChecked, setIsHorseChecked] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [toSearch, setToSearch] = useState('')

    const handleFilterClick = (e) => {
        const value = e.currentTarget.children[0].innerText
        if (value === 'Stables') {
            setIsStableChecked(true)
            setIsHorseChecked(false)
        } else if (value === 'Horses') {
            setIsHorseChecked(true)
            setIsStableChecked(false)
        }
    }

    const handleSearch = () => {
        setToSearch(searchValue)
        setSearchValue('')
    }

    return (
        <div id="search-container">
            <div className={`search-bar ${isActive && 'dropDown-activated-style'}`}>
                {
                    searchValue !== '' ?
                        <MdCancel
                            className={`eraseSearch-icon`}
                            onClick={() => setSearchValue('')}
                        /> :
                        <BsSearch
                            className={`search-icon`}
                        />
                }
                <input
                    type="text"
                    placeholder='Search...'
                    value={searchValue}
                    onChange={(e) =>
                        setSearchValue(e.target.value)
                    }
                />
                {/* {
                    searchValue.length >= 3 && */}
                <div
                    onClick={handleSearch}
                    className={`sendSearchValue-icon ${searchValue.length < 3 ? 'rollOut' : 'roll-in d-block'}`}
                >
                    Go!
                </div>
                {/* } */}
                <IoFilter className='filter-icon' onClick={() => setIsActive(!isActive)} />
                {
                    isActive &&
                    <div className='search-filter-dropDown'>
                        <div onClick={(e) => handleFilterClick(e)} className='filteredBy-stables'>
                            <span >Stables</span>
                            {
                                isStableChecked ? <ImRadioChecked2 className='stableChecked-radio' /> : <ImRadioUnchecked />
                            }
                        </div>
                        <div onClick={(e) => handleFilterClick(e)} className='filteredBy-horses'>
                            <span >Horses</span>
                            {
                                isHorseChecked ? <ImRadioChecked2 className='stableChecked-radio' /> : <ImRadioUnchecked />
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchBar
