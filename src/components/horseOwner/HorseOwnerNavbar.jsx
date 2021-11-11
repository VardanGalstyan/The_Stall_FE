import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'



function HorseOwnerNavbar() {
    const [isActive, setIsActive] = useState(false)
    const history = useHistory()
    const role = localStorage.getItem('role')


    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        history.push('/loginOption')
    }

    const handleProfileChange = (profile) => {
        history.push(`/${profile}`)
    }

    return (

        <Row className='horseOwnerNavbar'>
            <div
                onClick={() => setIsActive(!isActive)}
                className='userProfile'
            >
                <CgProfile />
                <p>Anna Bauer</p>
            </div>
            {
                isActive &&
                <div className='isActiveOption'>
                    <span onClick={() => handleProfileChange(role)}> My Profile</span>
                    <span onClick={logout}>Sign Out</span>
                </div>
            }
        </Row>
    )
}

export default HorseOwnerNavbar
