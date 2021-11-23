import React, { useState } from 'react'
import './feed.css'
import image from '../../images/website.png'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import RegisterModal from '../onboarding/Register/RegisterModal.jsx'
import LoginModal from '../onboarding/Login/LoginModal.jsx'

function Feed() {

    const [modalShow, setModalShow] = useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [show, setShow] = useState(false)
    const [responsive, setResponsive] = useState(false)
    const token = localStorage.getItem('token')
    console.log(token);

    return (
        <div id='navbar'>
            <div className='navbar-feed-container'>
                <div><img src={image} alt="logo" /></div>
                <div className='navbar-feed-responsive'>
                    <div >
                        {responsive ?
                            <GrClose onClick={() => setResponsive(false)} className='responsive-icon' /> :
                            <AiOutlineMenu onClick={() => setResponsive(true)} className='non-responsive-icon' />}
                        {
                            responsive &&
                            <div className={`responsive-dropDown`}>
                                {token ?
                                    <div className='responsive-dropDown-guest'>
                                        <button onClick={() => setLoginModalShow(true)} className='signInButton'>Sign in</button>
                                        <button onClick={() => setModalShow(true)} className='signUpButton'>Sign up</button>
                                    </div>
                                    :
                                    <div className='responsive-dropDown-user'>
                                        <span>Settings</span>
                                        <span>Help</span>
                                        <span>Log out</span>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className={`navbar-feed-guest ${token === null ? 'd-flex' : 'd-none'}`}>
                    <button onClick={() => setLoginModalShow(true)} className='signInButton'>Sign in</button>
                    <button onClick={() => setModalShow(true)} className='signUpButton'>Sign up</button>
                </div>
                <div className={`navbar-feed-elements ${token === null ? 'd-none' : 'd-flex'}`}>
                    <span>Home</span>
                    <div onClick={() => setShow(!show)} className='navbarDropDownFeed'>
                        <span>My Profile</span>
                        {show ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                    </div>
                </div>
                <div className={`${!show ? 'd-none' : 'd-block'} navbarDropDown`}>
                    <div className='navbarDropDown-elements'>
                        <span>Settings</span>
                        <span>Help</span>
                        <span>Log out</span>
                    </div>
                </div>
            </div>
            <RegisterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <LoginModal
                show={loginModalShow}
                onHide={() => setLoginModalShow(false)}
            />
        </div>
    )
}

export default Feed
