import './style/userProfile.css'
import React, { useState, } from 'react'
import { Col } from 'react-bootstrap'
import { ImLocation2, ImMobile } from 'react-icons/im'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaMapPin } from 'react-icons/fa'
import GoogleMap from '../GoogleMap/GoogleMap'
import Loader from 'react-loader-spinner'
import DropDownOption from '../DropDownOption.jsx/DropDownOption'
import UserProfileModal from './UserProfileModal'

function UserProfile(props) {

    const { data } = props


    const name = data && `${data.first_name} ${data.surname}`
    const detailedLocation = props.location && props.location.formatted_address.split(' ').slice(0, 2).join(' ')
    const cityAndCountry = props.location && props.location.formatted_address.split(' ').slice(3, 8).join(' ')

    const [location, setLocation] = useState(true)
    const [phone, setPhone] = useState(false)
    const [email, setEmail] = useState(false)
    const [message, setMessage] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);


    const handleContactDetails = (setValue) => {
        const arrayOfValue = [setPhone, setEmail, setLocation, setMessage]
        arrayOfValue
            .filter(item => item !== setValue)
            .forEach(item => item(false))
        setValue(true)
    }

    return (
        <>
            {
                props.loading ?
                    <Col className='user-profile' lg={4} xl={3}>
                        <Loader
                            type="ThreeDots"
                            color="#3b3b3b"
                            height={25}
                            width={25}
                        />
                    </Col>
                    :
                    <Col className='user-profile' lg={4} xl={3}>
                        <DropDownOption setModalShow={() => setModalShow(true)} />
                        <div className='user-profile-header'>
                            {
                                data && !data.avatar
                                    ? <img src="https://autohaus-lemke.de/site/assets/files/1085/platzhalter-mann.jpg" alt="user-thumbnail" />
                                    : <img src={data && data.avatar} alt="profile-cover" />
                            }
                        </div>
                        <div className='user-profile-title'>
                            <span>{props.name ? props.name : name}</span>
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
                                        <span> {detailedLocation}</span>
                                        <span>{cityAndCountry}</span>
                                    </div>
                                </div>
                                <GoogleMap location={props.location && props.location} />
                            </>
                        }
                        {
                            phone &&
                            <div className='user-profile-details-mobile'>
                                {
                                    data && data.contacts.phone &&
                                    <div className='mobile-number'>
                                        <span className='details-mobile-icon'><ImMobile /></span>
                                        <span className='details-mobile-text'>{` ${props.contacts && props.contacts.phone}`}</span>
                                    </div>
                                }
                                {
                                    data && data.contacts.whatsApp &&
                                    <div className='whatsapp-number'>
                                        <span className='details-whatsapp-icon'><IoLogoWhatsapp /></span>
                                        <span className='details-whatsapp-text'>{` ${props.contacts && props.contacts.whatsApp}`}</span>
                                    </div>
                                }
                                {
                                    data && data.contacts.web &&
                                    <div className='whatsapp-number'>
                                        <span className='details-whatsapp-icon'><IoLogoWhatsapp /></span>
                                        <span className='details-whatsapp-text'>{` ${props.contacts && props.contacts.web}`}</span>
                                    </div>
                                }
                            </div>
                        }
                        {
                            email &&
                            <div className='user-profile-details-email'>
                                <input
                                    placeholder="Your Email"
                                    type="email"
                                />
                                <input
                                    placeholder="Subject"
                                    type="email"
                                />
                                <textarea
                                    placeholder='Tell us more...'
                                    rows='4'
                                    type="text"
                                />
                                <button>Send</button>
                            </div>
                        }
                        <UserProfileModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            handlefetch={props.handlefetch}
                            data={data}
                        />
                    </Col>
            }
        </>
    )
}

export default UserProfile
