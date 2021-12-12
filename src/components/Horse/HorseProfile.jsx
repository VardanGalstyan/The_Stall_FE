import React, { useEffect } from 'react'
import './style/horse.css'
import Feed from '../Navbar/Feed'
import ProfileHeader from '../../reusables/ProfileHeader/ProfileHeader'
import { Container, Col } from 'react-bootstrap'
import UserProfile from '../../reusables/UserProfile/UserProfile'
import AboutUser from '../../reusables/AboutUser/AboutUser'
import Calendar from '../../reusables/Calendar/CalendarPlanner'
import StableCards from '../Cards/StableCards/StableCards'
import Reviews from '../../reusables/Reviews/Reviews'
import Footer from '../Footer/Footer'
import ImageGallery from '../Gallery/ImageGallery'
import useFetch from '../../utils/useFetch.js'
import { useParams } from 'react-router-dom'


function HorseProfile() {

    const { id } = useParams()
    const { data, isPending, error } = useFetch(`http://localhost:3001/horses/${id}`)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='container-holder'>
            <Feed />
            <ProfileHeader
                image={data && data.avatar}
                name={data && data.name}
            />
            <Container className='profile-body'>
                <UserProfile data={data && data.horse_owner} loading={isPending} />
                <Col className='profile-body-properties'>
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Experience</span>
                        </div>
                        <div className='profile-body-experience-content'>
                            <div className='profile-body-experience-item'>
                                <span className='experience-index'>34</span>
                                <span className='experience-value'>Age</span>
                            </div>
                            <div className='profile-body-experience-item'>
                                <span className='experience-index'>34</span>
                                <span className='experience-value'>Height</span>
                            </div>
                            <div className='profile-body-experience-item'>
                                <span className='experience-index'>61kg</span>
                                <span className='experience-value'>Weight</span>
                            </div>
                            <div className='profile-body-experience-item'>
                                <span className='experience-index'>Yes</span>
                                <span className='experience-value'>Mobility</span>
                            </div>
                            <div className='profile-body-experience-item'>
                                <span className='experience-index'>advance</span>
                                <span className='experience-value'>Experience</span>
                            </div>
                            <div className='profile-body-experience-item'>
                                <span className='experience-index'>Western</span>
                                <span className='experience-value'>Style</span>
                            </div>
                        </div>
                    </div>
                    <AboutUser content={data && data.description} loading={isPending} />
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Calendar</span>
                        </div>
                        <div className='profile-container-flex'>
                            <Calendar bookings={data && data.bookings} loading={isPending} />
                        </div>
                    </div>
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Gallery</span>
                        </div>
                        <div className='profile-container-flex'>
                            <ImageGallery />
                        </div>
                    </div>
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Stables</span>
                        </div>
                        <div className='profile-container-scrollable'>
                            {/* <StableCards /> */}
                        </div>
                    </div>
                    <Reviews />
                </Col>
            </Container>
            <Footer />
        </div>
    )
}

export default HorseProfile
