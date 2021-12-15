import React, { useState } from 'react'
import { IoLocation } from 'react-icons/io5'
import { IoMdContact } from 'react-icons/io'
import { SiMinutemailer } from 'react-icons/si'
import { useHistory } from 'react-router-dom'

function CardBody(props) {

    const [contactUser, setContactUser] = useState(false)

    const history = useHistory()

    return (
        <div className='card-body'>
            <h5
                onClick={() => history.push(`/stables/${props.stable._id}`)}
                className='card-title'
            >
                {props.stable && props.stable.stable_name}
            </h5>
            <div className='card-location'>
                <span className='card-location-map'> <IoLocation /></span>
                <span className='card-description'> {props.stable && props.stable.location.formatted_address}</span>
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
                    {props.stable.stable_owner ?
                        `${props.stable.stable_owner.first_name} ${props.stable.stable_owner.surname}` 
                        : 'Add Name'
                    }
                </span>
            </div>
            <div className='card-properties'>
                <span>{props.stable &&
                    `Boxes 
                    ${props.stable.number_of_boxes - props.stable.horses.length} / 
                    ${props.stable.number_of_boxes}`}
                </span>
            </div>
        </div>
    )
}

export default CardBody
