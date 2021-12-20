import React, { useState, useEffect } from 'react'
import ProfileHeader from '../../reusables/ProfileHeader/ProfileHeader'
import Feed from '../Navbar/Feed'
import { Container, Col } from 'react-bootstrap'
import UserProfile from '../../reusables/UserProfile/UserProfile'
import './style/rider.css'
import SingleHorseCard from '../Cards/HorseCards/SingleHorseCard'
import StableCards from '../Cards/StableCards/StableCards'
import Calendar from '../../reusables/Calendar/CalendarPlanner'
import Reviews from '../../reusables/Reviews/Reviews'
import Footer from '../Footer/Footer'
import AboutUser from '../../reusables/AboutUser/AboutUser'
import Loader from '../../utils/Loader'
import { useParams } from 'react-router-dom'

function RiderProfile() {

    const token = localStorage.getItem('token')
    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState(null)
    const { id } = useParams()

    const handlefetch = async () => {
        try {
            setIsPending(true)
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}rider/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setIsPending(false)
            } else {
                setIsPending(false)
                throw new Error('Something went wrong')
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        handlefetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const isValid = () => id === data._id
    const userName = `${data && data.first_name} ${data && data.surname}`

    return (
        <div className='container-holder'>
            {
                isPending ?
                    <Loader /> :
                    <>
                        <Feed />
                        <ProfileHeader
                            image={data && data.avatar}
                            name={userName}
                        />
                        <Container className='profile-body'>
                            <UserProfile
                                data={data && data}
                            />
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
                                <AboutUser
                                    content={data && data.description}
                                    loading={isPending}
                                    isValid={isValid}
                                    handlefetch={handlefetch}
                                />
                                <div className='profile-container'>
                                    <div className='profile-container-title'>
                                        <span>Calendar</span>
                                    </div>
                                    <div className='profile-container-flex'>
                                        <Calendar bookings={data && data.bookings} />
                                    </div>
                                </div>
                                <div className='profile-container'>
                                    <div className='profile-container-title'>
                                        <span>Horses</span>
                                    </div>
                                    <div className='profile-container-scrollable'>

                                    </div>
                                </div>
                                <div className='profile-container'>
                                    <div className='profile-container-title'>
                                        <span>Stables</span>
                                    </div>
                                    <div className='profile-container-scrollable'>

                                    </div>
                                </div>
                                <Reviews />
                            </Col>
                        </Container>
                        <Footer />
                    </>
            }
        </div>
    )
}

export default RiderProfile
