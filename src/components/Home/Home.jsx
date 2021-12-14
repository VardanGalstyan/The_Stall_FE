import React from 'react'
import Feed from '../Navbar/Feed'
import SearchBar from './SearchBar/SearchBar'
import './style/home.css'
import Jumbotron from './Jumbotron/Jumbotron'
import { SiOpenstreetmap } from 'react-icons/si'
import { Container } from 'react-bootstrap'
import useFetch from '../../utils/useFetch'
import SingleHorseCard from '../Cards/HorseCards/SingleHorseCard'
import StableCards from '../Cards/StableCards/StableCards'

function Home() {

    const { data, isPending, error } = useFetch('http://localhost:3001/horses')
    const stables = useFetch('http://localhost:3001/stables')




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
                <Container className='card-container'>
                    {
                        data && data.map(horse =>
                            <SingleHorseCard
                                key={horse._id}
                                horse={horse}
                                name={horse.name}
                            />
                        )
                    }
                </Container>
            </Container>
            <Container className=' mt-5 stable-container'>
                <div className='stable-container-title'>
                    <h5>Stables</h5>
                    <SiOpenstreetmap className='stable-container-icon' />
                </div>
                <Container className='card-container'>
                    {stables.data && stables.data.stables.map(stable =>
                        <StableCards
                            key={stable._id}
                            stable={stable}
                        />
                    )}
                </Container>
            </Container>
        </div>
    )
}

export default Home
