import React from 'react'
import Feed from '../Navbar/Feed'
import SearchBar from './SearchBar/SearchBar'
import './home.css'
import Jumbotron from './Jumbotron/Jumbotron'
import CardContainer from './CardContainer/CardContainer'
import { SiOpenstreetmap } from 'react-icons/si'

function Home() {
    return (
        <div id='home'>
            <Feed />
            <Jumbotron />
            <SearchBar />
            <div className='stable-container'>
                <div className='stable-container-title'>
                    <h5>Horses</h5>
                    <SiOpenstreetmap className='stable-container-icon' />
                </div>
                <CardContainer />
            </div>
            <div className='stable-container'>
                <div className='stable-container-title'>
                    <h5>Stables</h5>
                    <SiOpenstreetmap className='stable-container-icon' />
                </div>
                <CardContainer />
            </div>
        </div>
    )
}

export default Home
