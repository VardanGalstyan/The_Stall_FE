import React, { useState } from 'react'
import './styles/feed.css'
import image from '../../images/website.png'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import RegisterModal from '../onboarding/Register/RegisterModal.jsx'
import LoginModal from '../onboarding/Login/LoginModal.jsx'
import { useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function Feed() {

    const [modalShow, setModalShow] = useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [show, setShow] = useState(false)
    const [responsive, setResponsive] = useState(false)
    const history = useHistory()
    const token = localStorage.getItem('token')

    const handleLogOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        history.push('/home')

    }


    return (
        <div id='navbar'>
            <Container className='navbar-feed-container'>
                <div className='navbar-logo' onClick={() => history.push('/home')}><img src={image} alt="logo" /></div>
                <div className='navbar-feed-responsive'>
                    <div >
                        {
                            responsive ?
                                <GrClose onClick={() => setResponsive(false)} className='responsive-icon' /> :
                                <AiOutlineMenu onClick={() => setResponsive(true)} className='non-responsive-icon' />
                        }
                        {
                            responsive &&
                            <div className={`responsive-dropDown`}>
                                {!token
                                    ?
                                    <div className='responsive-dropDown-guest'>
                                        <button onClick={() => setLoginModalShow(true)} className='signInButton'>Sign in</button>
                                        <button onClick={() => setModalShow(true)} className='signUpButton'>Sign up</button>
                                    </div>
                                    :
                                    <div className='responsive-dropDown-user'>
                                        <span>Settings</span>
                                        <span>Help</span>
                                        <span onClick={handleLogOut}>Log out</span>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
                {!token
                    ?
                    <div className={`navbar-feed-guest`}>
                        <button onClick={() => setLoginModalShow(true)} className='signInButton'>Sign in</button>
                        <button onClick={() => setModalShow(true)} className='signUpButton'>Sign up</button>
                    </div>
                    :
                    <div className={`navbar-feed-elements`}>
                        <span>Home</span>
                        <div onClick={() => setShow(!show)} className='navbarDropDownFeed'>
                            <span>My Profile</span>
                            {show ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                        </div>
                        <div className={`${!show ? 'd-none' : 'd-block'} navbarDropDown`}>
                            <div className='navbarDropDown-elements'>
                                <span>Settings</span>
                                <span>Help</span>
                                <span onClick={handleLogOut}>Log out</span>
                            </div>
                        </div>
                    </div>

                }
            </Container>
            <RegisterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <LoginModal
                show={loginModalShow}
                onHide={() => setLoginModalShow(false)}
            />
        </div >
    )
}

export default Feed
