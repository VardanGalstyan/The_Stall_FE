import React, { useState, } from 'react'
import { Col } from 'react-bootstrap'
import { ImLocation2 } from 'react-icons/im'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import { ImMobile } from 'react-icons/im'
import { FaMapPin } from 'react-icons/fa'
import StableGoogleMap from './StableGoogleMap'

function StableOwnerProfile() {

    const [location, setLocation] = useState(true)
    const [phone, setPhone] = useState(false)
    const [email, setEmail] = useState(false)
    const [message, setMessage] = useState(false)



    const handleContactDetails = (setValue, value) => {
        const arrayOfValue = [setPhone, setEmail, setLocation, setMessage]
        arrayOfValue
            .filter(item => item !== setValue)
            .forEach(item => item(false))
        setValue(true)
    }

    return (
        <Col className='stable-owner-profile' lg={4} xl={3}>
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
                <>
                    <div className='stable-profile-details-location'>
                        <div className='details-location-icon'>
                            <span><FaMapPin /></span>
                        </div>
                        <div className='details-location-text'>
                            <span> Mögglinger Str.83</span>
                            <span> Heubach Germany</span>
                        </div>
                    </div>
                    <StableGoogleMap location={'stuttgart'} />
                </>
            }
            {
                phone &&
                <div className='stable-profile-details-mobile'>
                    <div className='mobile-number'>
                        <span className='details-mobile-icon'><ImMobile /></span>
                        <span className='details-mobile-text'> + 491 174 234 23</span>
                    </div>
                    <div className='whatsapp-number'>
                        <span className='details-whatsapp-icon'><IoLogoWhatsapp /></span>
                        <span className='details-whatsapp-text'> + 491 174 234 23</span>
                    </div>
                </div>
            }
            {
                email &&
                <div className='stable-profile-details-email'>
                    <input placeholder="Your Email" type="email" />
                    <input placeholder="Subject" type="email" />
                    <textarea placeholder='Tell us more...' rows='4' type="text" />
                    <button>Send</button>
                </div>
            }
        </Col>
    )
}

export default StableOwnerProfile
