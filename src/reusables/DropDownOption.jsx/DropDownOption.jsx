import './style/drowdown.css'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'

function DropDownOption({ setModalShow }) {

    const [settings, setSettings] = useState(false)

    return (
        <div className='drop-down-container'>
            <span
                className='profile-dropDown-options'
                onClick={() => setSettings(!settings)}
            >
                <BsThreeDots />
            </span>
            {
                settings &&
                <div className='container-item-settings-button'>
                    <span onClick={() => {
                        setModalShow(true)
                        setSettings(false)
                    }}
                        className='edit-button'>Edit</span>
                    <span className='hide-button'>Hide</span>
                </div>
            }
        </div>
    )
}

export default DropDownOption
