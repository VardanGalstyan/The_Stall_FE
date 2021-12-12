import React from 'react'
import { Container } from 'react-bootstrap'
import './style/profileHeader.css'


function ProfileHeader(props) {
    return (
        <Container id='profile-header'>
            <div className='profile-header-content'>
                <div className='profile-cover-image'>
                    {
                        !props.image
                            ? <img src="https://autohaus-lemke.de/site/assets/files/1085/platzhalter-mann.jpg" alt="user-thumbnail" />
                            : <img src={props.image} alt="profile-cover" />
                    }
                </div>
                <div className='profile-header-description'>
                    <span className='profile-header-name'>{props.name}</span>
                </div>
            </div>
            <div className='profile-header-wave'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320">
                    <path fill="#ffcc56"
                        fill-opacity="0.48"
                        d="M0,192L40,160C80,128,160,64,240,58.7C320,53,400,107,480,128C560,149,640,139,720,144C800,149,880,171,960,197.3C1040,224,1120,256,1200,261.3C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                    </path>
                </svg>
            </div>
        </Container>
    )
}

export default ProfileHeader
