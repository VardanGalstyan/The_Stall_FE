import React from 'react'
import Feed from '../Navbar/Feed'
import SearchBar from './SearchBar/SearchBar'
import './home.css'

function Home() {
    return (
        <div id='home'>
            <Feed />
            <SearchBar />
        </div>
    )
}

export default Home
