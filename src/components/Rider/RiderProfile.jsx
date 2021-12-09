import React from 'react'
import ProfileHeader from '../../reusables/ProfileHeader/ProfileHeader'
import Feed from '../Navbar/Feed'
import { Container, Col } from 'react-bootstrap'
import UserProfile from '../../reusables/UserProfile/UserProfile'
import './style/rider.css'
import BodyAboutUs from '../../reusables/ProfileBody/BodyAboutUs'
import SingleHorseCard from '../Cards/HorseCards/SingleHorseCard'
import StableCards from '../Cards/StableCards/StableCards'
import Calendar from '../../reusables/Calendar/CalendarPlanner'
import Reviews from '../../reusables/Reviews/Reviews'
import Footer from '../Footer/Footer'


function RiderProfile() {
    return (
        <div className='container-holder'>
            <Feed />
            <ProfileHeader
                image={'https://i1.wp.com/92067magazine.com/wp-content/uploads/sites/16/2017/12/f_student-lyman-001.jpg'}
                name={'Julia Abbas'}
            />
            <Container id='profile-body'>
                <UserProfile />
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
                    <BodyAboutUs />
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Calendar</span>
                        </div>
                        <div className='profile-container-flex'>
                            <Calendar />
                        </div>
                    </div>
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Horses</span>
                        </div>
                        <div className='profile-container-scrollable'>
                            <SingleHorseCard />
                            <SingleHorseCard />
                        </div>
                    </div>
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Stables</span>
                        </div>
                        <div className='profile-container-scrollable'>
                            <StableCards />
                        </div>
                    </div>
                    <Reviews />
                </Col>

            </Container>
            <Footer />
        </div>
    )
}

export default RiderProfile