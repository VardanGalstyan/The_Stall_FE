import React, { useState } from 'react'
import './feed.css'
import image from '../../images/website.png'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

function Feed() {

    const [show, setShow] = useState(false)
    const [responsive, setResponsive] = useState(false)
    const token = localStorage.getItem('token')

    return (
        <div id='navbar'>
            <div className='navbar-feed-container'>
                <div><img src={image} alt="logo" /></div>
                <div className='navbar-feed-responsive'>
                    <div onClick={() => setResponsive(!responsive)}>
                        {responsive ? <GrClose className='responsive-icon' /> : <AiOutlineMenu className='non-responsive-icon' />}
                        {
                            responsive &&
                            <div className={`responsive-dropDown`}>
                                {!token ?
                                    <div className='responsive-dropDown-guest'>
                                        <button className='signInButton'>Sign in</button>
                                        <button className='signUpButton'>Sign up</button>
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
                <div className={`navbar-feed-guest ${token === null ? 'd-flex' : 'd - none'}`}>
                    <button className='signInButton'>Sign in</button>
                    <button className='signUpButton'>Sign up</button>
                </div>
                <div className={`navbar-feed-elements ${token === null ? 'd-none' : 'd - flex'}`}>
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
        </div>
    )
}

export default Feed
