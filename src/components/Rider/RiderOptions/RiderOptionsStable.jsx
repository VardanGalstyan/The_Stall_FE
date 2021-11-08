import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { GoLocation } from 'react-icons/go'
import { IoAdd } from 'react-icons/io5'
import GeoModal from '../../../utils/GeoModal.jsx'

function RiderOptionsStable({ horses }) {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Col md={4} sm={11} xs={11} className='singleRiderOption mb-4'>
            <div className='riderOptionsHorseHeader'>
                <span>Stables</span>
                <IoAdd onClick={() => setModalShow(true)} />
            </div>
            {
                horses && horses.map(horse => {
                    return (
                        horse.stable
                            ?
                            <div className={'riderOptionsStableBody'}>
                                <div className='stableBodyProfile'>
                                    <img src={horse.stable ? horse.stable.avatar : "https://picsum.photos/200"} alt="stableCover" />
                                </div>
                                <div className='stableInfo'>
                                    <h4>Stable Name</h4>
                                    <div className='StableInfoDetails'>
                                        <GoLocation className='mr-1' />
                                        <p>location</p>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='riderOptionsStableBody justify-content-center'>
                                <div className='emptyStableInfo'>
                                    <h4>Find a Stable?</h4>
                                </div>
                            </div>
                    )
                })

            }
            <GeoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Col>
    )
}

export default RiderOptionsStable
