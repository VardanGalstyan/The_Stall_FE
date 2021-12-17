import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import AboutUserModal from './AboutUserModal'
import './style/aboutUser.css'
import DropDownOption from '../DropDownOption.jsx/DropDownOption'

function BodyAboutUs({ content, loading, isValid, handlefetch }) {


    const [isShow, setIsShow] = useState(false)
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
                            <span>About Me</span>
                            {
                                isValid &&
                                <DropDownOption setModalShow={() => setModalShow(true)} />
                            }
                        </div>
                        {
                            <div className={`${isShow ? 'show-more' : 'show-less'} profile-container-aboutUs-content`}>{content}</div>
                        }
                        <div
                            className={`${content && content.length < 400 ? 'd-none' : 'd-block'} profile-content-aboutUs-button`}
                            onClick={() => setIsShow(!isShow)}
                        >
                            {content && showTheText}
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