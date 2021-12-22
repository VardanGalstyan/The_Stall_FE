import React, { useEffect, useState } from 'react'
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
import { useParams } from 'react-router-dom'


function HorseProfile() {

    const { id } = useParams()
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)

    const handlefetch = async () => {

        try {
            setIsPending(true)
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/horses/${id}`)
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setIsPending(false)

            } else {
                setIsPending(false)
                throw new Error('Something went wrong')
            }
        } catch (error) {

        }
    }

    const name = data && `${data.horse_owner.first_name} ${data.horse_owner.surname}`

    useEffect(() => {
        window.scrollTo(0, 0)
        handlefetch()
    }, [])

    return (
        <div className='container-holder'>
            <Feed />
            <ProfileHeader
                image={data && data.avatar}
                name={data && data.name}
            />
            <Container className='profile-body'>
                <UserProfile
                    data={data && data}
                    loading={isPending}
                    location={data && data.stable.location}
                    contacts={data && data.stable.contacts}
                    avatar={data && data.stable.avatar}
                    name={name}
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
                    <AboutUser content={data && data.description} loading={isPending} />
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Calendar</span>
                        </div>
                        <div className='profile-container-flex'>
                            <Calendar bookings={data && data.bookings} loading={isPending} handlefetch={() => handlefetch()} />
                        </div>
                    </div>
                    <ImageGallery />
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Stables</span>
                        </div>
                        <div className='profile-container-scrollable'>
                            <StableCards stable={data && data.stable} />
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
