import React, { useState, useEffect } from 'react'
import './style/horseOwner.css'
import Feed from '../Navbar/Feed'
import { Container, Col } from 'react-bootstrap'
import ProfileHeader from '../../reusables/ProfileHeader/ProfileHeader'
import UserProfile from '../../reusables/UserProfile/UserProfile'
import AboutUser from '../../reusables/AboutUser/AboutUser'
import SingleHorseCard from '../Cards/HorseCards/SingleHorseCard'
import StableCards from '../Cards/StableCards/StableCards'
import Calendar from '../../reusables/Calendar/CalendarPlanner'
import Reviews from '../../reusables/Reviews/Reviews'
import { useParams } from 'react-router-dom'


function HorseOwnerProfile() {

    const { id } = useParams()
    const token = localStorage.getItem('token')
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)


    const handlefetch = async () => {
        try {
            setIsPending(true)
            const response = await fetch(`http://localhost:3001/horseOwner/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setIsPending(false)

            } else {
                setError(true)
                setIsPending(false)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const name = data && `${data.first_name} ${data.surname}`
    const validateUser = () => data && data.horses.some(horse => horse._id === id) && data._id === id

    useEffect(() => {
        handlefetch()
        window.scrollTo(0, 0)
        validateUser()
        console.log('another data to check', data);

    }, [])


    return (
        <div className='container-holder'>
            {isPending ? <div className='loader'></div> :
                <>
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
                            <AboutUser content={data && data.description} loading={isPending} isValid={validateUser} handlefetch={handlefetch} />
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
                                        data &&
                                        data.horses.map((horse, index) =>
                                            <SingleHorseCard
                                                key={index}
                                                horse={horse}
                                                loading={isPending}
                                                name={name}
                                            />
                                        )
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
                </>
            }
        </div >
    )
}

export default HorseOwnerProfile
