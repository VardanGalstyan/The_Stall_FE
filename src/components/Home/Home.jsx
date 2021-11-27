import React from 'react'
import Feed from '../Navbar/Feed'
import SearchBar from './SearchBar/SearchBar'
import './home.css'
import Jumbotron from './Jumbotron/Jumbotron'
import CardContainer from './CardContainer/CardContainer'

function Home() {
    return (
        <div id='home'>
            <Feed />
            <Jumbotron />
            <SearchBar />
            <CardContainer />
        </div>
    )
}

export default Home
