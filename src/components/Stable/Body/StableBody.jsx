import React from 'react'
import { Container, Col } from 'react-bootstrap'
import './styles/StableBody.css'
import StableOwnerProfile from './StableOwnerProfile/StableOwnerProfile'
import { GiHorseHead, GiStable, GiPerson } from 'react-icons/gi'
import StableTeam from './StableContent/StableTeam'
import SingleHorseCard from '../../Cards/HorseCards/SingleHorseCard'
import ImageGallery from '../../Gallery/ImageGallery'




function StableBody() {

    return (
        <Container id='stable-body'>
            <StableOwnerProfile />
            <Col className='stable-body-properties'>
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
                <div className='stable-body-aboutUs'>
                    <div className='stable-body-aboutUs-title'>
                        <span>About us</span>
                    </div>
                    <div className='stable-body-aboutUs-content'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eius voluptatibus dolor numquam doloremque natus officiis perspiciatis soluta illum qui?</span>
                    </div>
                </div>
                <div className='stable-body-property-facilities'>
                    <div className='stable-body-facilities-title'>
                        <span>Facilities</span>
                    </div>
                    <div className='stable-body-facility-items'>
                        <span>something</span>
                        <span>something</span>
                        <span>something</span>
                        <span>something</span>
                        <span>something</span>
                        <span>something</span>
                        <span>something</span>
                    </div>
                </div>
                <div className='stable-body-property-facilities'>
                    <div className='stable-body-facilities-title'>
                        <span>Services</span>
                    </div>
                    <div className='stable-body-facility-items'>
                        <span>something</span>
                        <span>something</span>
                        <span>something</span>
                        <span>something</span>
                        <span>something</span>
                    </div>
                </div>
                <div className='stable-body-horses'>
                    <div className='stable-body-horses-title'>
                        <span>In-house Horses</span>
                    </div>
                    <div className='stable-inHouse-horses'>
                        <SingleHorseCard />
                        <SingleHorseCard />
                        <SingleHorseCard />
                        <SingleHorseCard />
                        <SingleHorseCard />
                    </div>
                </div>
                <div className='stable-body-property-photos'>
                    <div className='stable-body-photos-title'>
                        <span>Photos</span>
                    </div>
                    <ImageGallery />
                </div>
                <div className='stable-body-team-container'>
                    <div className='stable-body-team-title'>
                        <span>Our Team</span>
                    </div>
                    <div className='team-members-container'>
                        <StableTeam />
                        <StableTeam />
                        <StableTeam />
                    </div>
                </div>
            </Col>
        </Container >
    )
}

export default StableBody
