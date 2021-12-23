import React, { useState } from 'react'
import Feed from '../Navbar/Feed'
import SearchBar from './SearchBar/SearchBar'
import './style/home.css'
import Jumbotron from './Jumbotron/Jumbotron'
import { SiOpenstreetmap } from 'react-icons/si'
import { Container } from 'react-bootstrap'
import useFetch from '../../utils/useFetch'
import SingleHorseCard from '../Cards/HorseCards/SingleHorseCard'
import StableCards from '../Cards/StableCards/StableCards'
import Footer from '../Footer/Footer'
import GeoModal from '../../utils/GeoModal'
import Loader from '../../utils/Loader'

function Home() {

    const [search, setSearch] = useState('')
    const [modalShow, setModalShow] = useState(false);
    const [toSearch, setToSearch] = useState('')

    const { data, isPending } = useFetch(`${process.env.REACT_APP_BASE_URL}/horses`)
    const stables = useFetch(`${process.env.REACT_APP_BASE_URL}/stables`)

    return (
        <>
            {
                isPending && stables.isPending
                    ?
                    <div className='main-loader'><Loader /></div>
                    :
                    <div id='home'>
                        <Feed />
                        <Jumbotron />
                        <SearchBar
                            search={(value) => setSearch(value)}
                            searchVal={search}
                            setToSearch={(value) => setToSearch(value)}
                        />
                        <Container className='mt-5 stable-container'>
                            <div className='stable-container-title'>
                                <h5>Horses</h5>
                                <SiOpenstreetmap
                                    className='stable-container-icon'
                                    onClick={() => {
                                        setModalShow(true)
                                    }}

                                />
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
                        <Container className=' my-5 stable-container'>
                            <div className='stable-container-title'>
                                <h5>Stables</h5>
                                <SiOpenstreetmap
                                    className='stable-container-icon'
                                    onClick={() => setModalShow(true)}
                                />
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
                        <GeoModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <Footer />
                    </div>
            }
        </>
    )
}

export default Home
