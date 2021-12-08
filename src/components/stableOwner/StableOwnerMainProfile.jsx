import React from 'react'
import Feed from '../Navbar/Feed'
import ProfileHeader from '../../reusables/ProfileHeader/ProfileHeader.jsx'
import UserProfile from '../../reusables/UserProfile/UserProfile.jsx'
import { Col, Container } from 'react-bootstrap'
import './style/soStyle.css'
import { IoAddSharp } from 'react-icons/io5'


function StableOwnerMainProfile() {
    return (
        <div className='container-holder'>
            <Feed />
            <ProfileHeader
                name={'Anna Bauer'}
                image={'https://www.equitrends.de/wp-content/uploads/2020/11/et-Header-Ipsos-Studie-1.jpg'}
            />
            <Container className='profile-body'>
                <UserProfile />
                <Col className='profile-body-properties' >
                    <div className='add-new-stable'>
                        <span className='welcome-note'>Welcome to the Stable User</span>
                        <div className='add-stable'>
                            Create a new stable
                            <span><IoAddSharp /></span>
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

export default StableOwnerMainProfile
