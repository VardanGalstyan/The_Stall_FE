import React from 'react'
import Feed from '../Navbar/Feed'
import SearchBar from './SearchBar/SearchBar'
import './style/home.css'
import Jumbotron from './Jumbotron/Jumbotron'
import CardContainer from './CardContainer/CardContainer'
import { SiOpenstreetmap } from 'react-icons/si'
import { Container } from 'react-bootstrap'

function Home() {
    return (
        <div id='home'>
            <Feed />
            <Jumbotron />
            <SearchBar />
            <Container className='mt-5 stable-container'>
                <div className='stable-container-title'>
                    <h5>Horses</h5>
                    <SiOpenstreetmap className='stable-container-icon' />
                </div>
                <CardContainer />
            </Container>
            <Container className=' mt-5 stable-container'>
                <div className='stable-container-title'>
                    <h5>Stables</h5>
                    <SiOpenstreetmap className='stable-container-icon' />
                </div>
                <CardContainer />
            </Container>
        </div>
    )
}

export default Home
