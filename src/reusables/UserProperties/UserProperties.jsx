import React from 'react'
import './style/userProps.css'

function UserProperties({ title }) {
    return (
        <div className='profile-container'>
            <div className='profile-container-title'>
                <span>{title}</span>
            </div>
            <div className='stable-user-property-items'>
                <span>something</span>
                <span>something</span>
                <span>something</span>
                <span>something</span>
                <span>something</span>
                <span>something</span>
                <span>something</span>
            </div>
        </div>
    )
}

export default UserProperties
