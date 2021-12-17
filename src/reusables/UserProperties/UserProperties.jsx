import React from 'react'
import './style/userProps.css'
import { VscAdd } from 'react-icons/vsc'

function UserProperties({ data, title }) {
    return (
        <div className='profile-container'>
            <div className='profile-container-title'>
                <span>{title}</span>
            </div>
            <div className='stable-user-property-items'>
                {
                    data.map(item => {
                        return <span>{item}</span>
                    })

                }
                <span className='add-property-item'><VscAdd /></span>
            </div>
        </div>
    )
}

export default UserProperties
