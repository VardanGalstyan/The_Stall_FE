import React, { useState } from 'react'
import { Container, Col } from 'react-bootstrap'
import './styles/StableBody.css'
import { ImLocation2 } from 'react-icons/im'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import { ImMobile } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
import { FaMapPin } from 'react-icons/fa'

function StableBody() {
    const [location, setLocation] = useState(true)
    const [phone, setPhone] = useState(false)
    const [email, setEmail] = useState(false)
    const [message, setMessage] = useState(false)

    const handleContactDetails = (setValue, value) => {
        const arrayOfValue = [setPhone, setEmail, setLocation, setMessage]
        arrayOfValue
            .filter(item => item !== setValue)
            .forEach(item => item(false))
        setValue(!value)

    }

    return (
        <Container id='stable-body'>
            <Col className='stable-owner-profile' xs={11} md={3}>
                <div className='so-profile-header'>
                    <img src='https://picsum.photos/200/300' alt='Stable Owner Profile' />
                </div>
                <div className='so-profile-title'>
                    <span>Mrs. Anna Bauer</span>
                    <div className='so-contact-details'>
                        <span onClick={() => handleContactDetails(setLocation, location)}><ImLocation2 /></span>
                        <span onClick={() => handleContactDetails(setPhone, phone)}><IoCall /></span>
                        <span onClick={() => handleContactDetails(setEmail, email)}><MdEmail /></span>
                        <span onClick={() => handleContactDetails(setMessage, message)}><SiMinutemailer /></span>
                    </div>
                </div>
                {
                    location &&
                    <div className='stable-profile-details-location'>
                        <div className='details-location-icon'>
                            <span><FaMapPin /></span>
                        </div>
                        <div className='details-location-text'>
                            <span> Mögglinger Str. 83</span>
                            <span> Heubach Germany</span>
                        </div>
                    </div>
                }
                {
                    phone &&
                    <div className='stable-profile-details'>
                        <div className='mobile-number'>
                            <span><ImMobile /></span>
                            <span> + 491 174 234 23</span>
                        </div>
                        <div className='whatsapp-number'>
                            <span><IoLogoWhatsapp /></span>
                            <span> + 491 174 234 23</span>
                        </div>
                    </div>
                }
                {
                    email &&
                    <div className='stable-profile-details'>
                        <div className='mobile-number'>
                            <span><SiGmail /></span>
                            <span><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></span>
                        </div>
                    </div>
                }
            </Col>
            <Col md={9} xs={11}>
                Rest here
            </Col>
        </Container >
    )
}

export default StableBody
