import React, { useEffect } from 'react'
import './style/stable.css'
import { Container, Col } from 'react-bootstrap'
import { GiHorseHead, GiStable, GiPerson } from 'react-icons/gi'
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


function Stable() {

    const { id } = useParams()
    const { data, isPending, error } = useFetch(`http://localhost:3001/stables/${id}`)

    const name = data && `${data.stable_owner && data.stable_owner.first_name} ${data.stable_owner && data.stable_owner.surname}`

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='container-holder'>
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
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Properties</span>
                        </div>
                        <div className='body-properties-header'>
                            <div className='properties-boxes'>
                                <span className='properties-title'>Boxes</span>
                                <div className='property-items'>
                                    <span><GiStable /></span>
                                    <span>26/31</span>
                                </div>
                            </div>
                            <div className='properties-boxes'>
                                <span className='properties-title'>Horses</span>
                                <div className='property-items'>
                                    <span><GiHorseHead /></span>
                                    <span>18</span>
                                </div>
                            </div>
                            <div className='properties-boxes'>
                                <span className='properties-title'>Horse Owners</span>
                                <div className='property-items'>
                                    <span><GiPerson /></span>
                                    <span>16</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <UserProperties title={'services'} />
                    <UserProperties title={'Facilities'} />
                    <AboutUser content={data && data.description} loading={isPending} />
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
                    <ImageGallery />
                    <div className='profile-container'>
                        <div className='profile-container-title'>
                            <span>Our Team</span>
                        </div>
                        <div className='profile-container-scrollable'>
                            <StableTeam />
                            <StableTeam />
                            <StableTeam />
                        </div>
                    </div>

                </Col>

            </Container>
        </div>
    )
}

export default Stable
