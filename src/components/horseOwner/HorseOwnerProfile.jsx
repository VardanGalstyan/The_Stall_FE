import './style/horseOwner.css'
import React, { useState, useEffect } from 'react'
import Feed from '../Navbar/Feed'
import { Container, Col } from 'react-bootstrap'
import ProfileHeader from '../../reusables/ProfileHeader/ProfileHeader'
import UserProfile from '../../reusables/UserProfile/UserProfile'
import AboutUser from '../../reusables/AboutUser/AboutUser'
import SingleHorseCard from '../Cards/HorseCards/SingleHorseCard'
import StableCards from '../Cards/StableCards/StableCards'
import Calendar from '../../reusables/Calendar/CalendarPlanner'
import Reviews from '../../reusables/Reviews/Reviews'
import useFetch from '../../utils/useFetch.js'


function HorseOwnerProfile() {

    const token = localStorage.getItem('token')
    const { data, isPending, error } = useFetch(`http://localhost:3001/horseOwner/me`, token)
    const name = data && `${data.first_name} ${data.surname}`

    console.log(data);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <div className='container-holder'>
            <Feed />
            <ProfileHeader
                image={data && data.avatar}
                name={name}
            />
            <Container className='profile-body'>
                <UserProfile data={data} lading={isPending} />
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
                            {/* <Calendar /> */}
                        </div>
                    </div>
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Horses</span>
                        </div>
                        <div className='profile-container-scrollable'>
                            {
                                data && data.horses.map((horse, index) => <SingleHorseCard key={index} horse={horse} loading={isPending} />)
                            }
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
        </div>
    )
}

export default HorseOwnerProfile