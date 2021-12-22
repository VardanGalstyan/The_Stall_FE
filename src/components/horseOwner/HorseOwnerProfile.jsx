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
import { BsThreeDots } from 'react-icons/bs'
import AddHorseModal from './AddHorseModal.jsx'
import ImageGallery from '../Gallery/ImageGallery.jsx'



function HorseOwnerProfile() {

    const { id } = useParams()
    const token = localStorage.getItem('token')
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [settings, setSettings] = useState(false)
    const [error, setError] = useState(false)
    const [modalShow, setModalShow] = useState(false)


    const handlefetch = async () => {
        try {
            setIsPending(true)
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/horseOwner/${id}`, {
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
    const validateUser = () => data && data._id !== id

    useEffect(() => {
        handlefetch()
        window.scrollTo(0, 0)
        validateUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <UserProfile
                            data={data && data}
                            loading={isPending}
                            location={data && data.horses[0].stable.location}
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
                                isValid={validateUser}
                                handlefetch={handlefetch}
                            />
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
                                    {
                                        validateUser &&
                                        <>
                                            <span
                                                className='profile-aboutUs-options'
                                                onClick={() => setSettings(!settings)}
                                            >
                                                <BsThreeDots />
                                            </span>
                                            {
                                                settings &&
                                                <div className='container-item-settings-button'>
                                                    <span onClick={() => {
                                                        setModalShow(true)
                                                        setSettings(false)
                                                    }}
                                                        className='edit-button'>Add Horse</span>
                                                    <span className='hide-button'>Hide</span>
                                                </div>
                                            }
                                        </>
                                    }
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
                                    <StableCards
                                        stable={data && data.horses[0].stable}
                                    />
                                </div>
                            </div>
                            <ImageGallery />
                            <Reviews />
                        </Col>
                    </Container>
                    <AddHorseModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </>
            }
        </div >
    )
}

export default HorseOwnerProfile
