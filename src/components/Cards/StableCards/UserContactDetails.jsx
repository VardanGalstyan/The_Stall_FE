import React from 'react'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

function UserContactDetails() {
    return (
        <div className='user-contact-details'>
            <span className='user-contact-header'>Contact Us</span>
            <div className='user-contact-body'>
                <div className='user-contact-call'>
                    <span className='user-contact-call-icon'><IoCall /></span>
                    <span className='user-contact-call-number'>+91 9876543210</span>
                </div>
                <div className='user-contact-email'>
                    <span className='user-contact-email-icon'><MdEmail /></span>
                    <span className='user-contact-email-address'>john.doe@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default UserContactDetails
