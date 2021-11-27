import React, { useState } from 'react'
import { IoLocation } from 'react-icons/io5'
import { IoMdContact } from 'react-icons/io'
import { SiMinutemailer } from 'react-icons/si'

function CardBody(props) {

    const [contactUser, setContactUser] = useState(false)
    


    return (
        <div className='card-body'>
            <h5 className='card-title'>PferdeResort</h5>
            <div className='card-location'>
                <span className='card-location-map'> <IoLocation /></span>
                <span className='card-description'> Mögglinger Str. 83, 73540 Heubach</span>
            </div>
            <div className='card-contact-user'>
                <span className='card-contact-user-icon'>
                    {
                        !contactUser ?
                            <IoMdContact /> :
                            <SiMinutemailer />
                    }
                </span>
                <span className='card-contact-user-details'
                    onMouseEnter={() => setContactUser(true)}
                    onMouseLeave={() => setContactUser(false)}
                    onClick={() => props.handleContactDetails()}
                >
                    John Doe
                </span>
            </div>
            <div className='card-properties'>
                <span>{`Boxes 14 / 30`}</span>
            </div>
        </div>
    )
}

export default CardBody
