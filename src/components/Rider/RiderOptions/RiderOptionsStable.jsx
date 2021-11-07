import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { GoLocation } from 'react-icons/go'
import { IoAdd } from 'react-icons/io5'
import GeoModal from '../../../utils/GeoModal.jsx'

function RiderOptionsStable() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Col md={4} sm={11} xs={11} className='singleRiderOption'>
            <div className='header'>
                <span>Stables</span>
                <IoAdd onClick={() => setModalShow(true)} />
            </div>
            <div className='body'>
                <div>
                    <img src="https://picsum.photos/200" alt="stableCover" />
                </div>
                <div>
                    <h4>Stable Name</h4>
                    <div>
                        <GoLocation />
                        <p>location</p>
                    </div>
                </div>
            </div>
            <GeoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Col>
    )
}

export default RiderOptionsStable
