import React, { useEffect } from 'react'
import './style/stable.css'
import { Container, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Feed from '../Navbar/Feed'
import ProfileHeader from '../../reusables/ProfileHeader/ProfileHeader'
import UserProfile from '../../reusables/UserProfile/UserProfile'
import AboutUser from '../../reusables/AboutUser/AboutUser'
import UserProperties from '../../reusables/UserProperties/UserProperties'
import ImageGallery from '../Gallery/ImageGallery'
import SingleHorseCard from '../Cards/HorseCards/SingleHorseCard'
import StableTeam from './StableTeam'
import useFetch from '../../utils/useFetch'
import InfoHeader from '../../reusables/InfoHeader/InfoHeader'
import Loader from '../../utils/Loader.js'


function Stable() {

    const { id } = useParams()
    const { data, isPending } = useFetch(`${process.env.REACT_APP_BASE_URL}/stables/${id}`)

    const name = data && `${data.stable_owner && data.stable_owner.first_name} ${data.stable_owner && data.stable_owner.surname}`

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const services = ['Half Board', 'Full Board', 'Self-Sufficiency']
    const facilities = ['Open Stable', 'Paddock', 'Outdoor boxes', 'Pension and Guest Boxes', 'Sumer Pasture', 'Riding Arena', 'Washing Arena']


    return (
        <div className='container-holder'>
            {
                isPending ? <Loader /> :
                    <>
                        <Feed />
                        <ProfileHeader
                            image={data && data.avatar}
                            name={data && data.stable_name}
                        />

                        <Container className='profile-body'>
                            <UserProfile
                                data={data && data.stable_owner}
                                contacts={data && data.contacts}
                                location={data && data.location}
                                name={name}

                            />
                            <Col className='profile-body-properties'>
                                <InfoHeader
                                    boxes={data && data.number_of_boxes}
                                    horses={data && data.horses}
                                />
                                <UserProperties data={services} title={'services'} />
                                <UserProperties data={facilities} title={'Facilities'} />
                                <AboutUser content={data && data.description} loading={isPending} />
                                <div className='profile-container'>
                                    <div className='profile-container-title'>
                                        <span>Horses</span>
                                    </div>
                                    <div className='profile-container-scrollable'>
                                        {
                                            data && data.horses.map((horse, index) => <SingleHorseCard
                                                key={index}
                                                horse={horse}
                                                loading={isPending}
                                            />)
                                        }
                                    </div>
                                </div>
                                <ImageGallery />
                                <div className='profile-container'>
                                    <div className='profile-container-title'>
                                        <span>Our Team</span>
                                    </div>
                                    <div className='profile-container-scrollable'>
                                        <StableTeam />
                                    </div>
                                </div>

                            </Col>

                        </Container>
                    </>
            }
        </div>
    )
}

export default Stable
