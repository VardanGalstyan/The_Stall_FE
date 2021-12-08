import React, { useState, } from 'react'
import { Col } from 'react-bootstrap'
import { ImLocation2, ImMobile } from 'react-icons/im'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaMapPin } from 'react-icons/fa'
import './style/userProfile.css'
import GoogleMap from '../GoogleMap/GoogleMap'

function StableOwnerProfile() {

    const [location, setLocation] = useState(true)
    const [phone, setPhone] = useState(false)
    const [email, setEmail] = useState(false)
    const [message, setMessage] = useState(false)


    const handleContactDetails = (setValue) => {
        const arrayOfValue = [setPhone, setEmail, setLocation, setMessage]
        arrayOfValue
            .filter(item => item !== setValue)
            .forEach(item => item(false))
        setValue(true)
    }

    return (
        <Col className='user-profile' lg={4} xl={3}>
            <div className='user-profile-header'>
                <img src='https://picsum.photos/200/300' alt='user-profile-avatar' />
            </div>
            <div className='user-profile-title'>
                <span>Mrs. Anna Bauer</span>
                <div className='user-contact-details'>
                    <span onClick={() => handleContactDetails(setLocation, location)}><ImLocation2 /></span>
                    <span onClick={() => handleContactDetails(setPhone, phone)}><IoCall /></span>
                    <span onClick={() => handleContactDetails(setEmail, email)}><MdEmail /></span>
                    <span onClick={() => handleContactDetails(setMessage, message)}><SiMinutemailer /></span>
                </div>
            </div>
            {
                location &&
                <>
                    <div className='user-profile-details-location'>
                        <div className='details-location-icon'>
                            <span><FaMapPin /></span>
                        </div>
                        <div className='details-location-text'>
                            <span> Mögglinger Str.83</span>
                            <span> Heubach Germany</span>
                        </div>
                    </div>
                    <GoogleMap location={'stuttgart'} />
                </>
            }
            {
                phone &&
                <div className='user-profile-details-mobile'>
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
                <div className='user-profile-details-email'>
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
