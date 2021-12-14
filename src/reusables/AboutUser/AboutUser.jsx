import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import { BsThreeDots } from 'react-icons/bs'
import AboutUserModal from './AboutUserModal'
import './style/aboutUser.css'

function BodyAboutUs({ content, loading, isValid, handlefetch }) {

    const role = localStorage.getItem('role')


    const [isShow, setIsShow] = useState(false)
    const [settings, setSettings] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const showTheText = !isShow ? "Show More..." : "Show less..."

    return (
        <div className='profile-container'>
            {
                loading ?
                    <Col className='spinner-loader' lg={4} xl={3}>
                        <Loader
                            type="ThreeDots"
                            color="#3b3b3b"
                            height={25}
                            width={25}
                        />
                    </Col>
                    :
                    <>
                        <div className='profile-container-title'>
                            <span>About us</span>
                            {
                                isValid &&
                                <>
                                    <span
                                        className='profile-aboutUs-options'
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
                                </>
                            }
                        </div>
                        <div className={`${isShow ? 'show-more' : 'show-less'} profile-container-aboutUs-content`}>{content}</div>
                        <div
                            className={`${content && content.length < 200 ? 'd-none' : 'd-block'} profile-content-aboutUs-button`}
                            onClick={() => setIsShow(!isShow)}
                        >
                            {showTheText}
                        </div>
                        <AboutUserModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            handlefetch={handlefetch}
                        />
                    </>
            }
        </div >
    )
}

export default BodyAboutUs