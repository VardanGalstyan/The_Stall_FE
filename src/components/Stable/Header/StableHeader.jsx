import React from 'react'
import { Container } from 'react-bootstrap'
import './styles/StableHeader.css'
import { ImLocation2 } from 'react-icons/im'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

function StableHeader() {
    return (
        <Container id='stable-header'>
            <div className='stable-header-content'>
                <div className='stable-cover-image'>
                    <img src="https://picsum.photos/200" alt="stable-cover" />
                </div>
                <div className='stable-header-description'>
                    <span className='stable-header-name'>PferdeResort</span>
                    {/* <div className='stable-header-location'>
                        <span className='stable-location-icon'><ImLocation2 /></span>
                        <span className='stable-location-icon'><IoCall /></span>
                        <span className='stable-location-icon'><MdEmail /></span>
                        <span className='stable-location-text'>Mögglinger Str. 83, 73540 Heubach</span>
                    </div> */}
                </div>
            </div>
            <div className='stable-header-wave'>
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

export default StableHeader
