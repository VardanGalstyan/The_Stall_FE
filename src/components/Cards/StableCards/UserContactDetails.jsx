import React from 'react'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

function UserContactDetails({ stable, horse }) {

    const history = useHistory()

    console.log(stable);

    return (
        <div className='user-contact-details'>
            <span className='user-contact-header'>Contact Us</span>
            <div className='user-contact-body'>
                <div className='user-contact-call'>
                    <span className='user-contact-call-icon'><IoCall /></span>
                    <span className='user-contact-call-number'>{stable && stable.contacts.mobile || horse && horse.horse_owner.contacts.mobile}</span>
                </div>
                <div className='user-contact-email'>
                    <span className='user-contact-email-icon'><MdEmail /></span>
                    <span className='user-contact-email-address'>john.doe@gmail.com</span>
                </div>
            </div>
            <div className='user-contact-button-holder'>
                <span onClick={() => history.push(
                    `/${stable && `stableOwner/${stable.stable_owner._id}`
                    || horse && `horseOwner/${horse.horse_owner._id}`}`
                )} className='user-contact-button'>Visit Profile</span>
            </div>
        </div>
    )
}

export default UserContactDetails
