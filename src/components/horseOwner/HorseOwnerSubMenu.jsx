import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { GrMapLocation } from 'react-icons/gr'
import { FaHorseHead } from 'react-icons/fa'
import HorseOwnerGeoModal from './HorseOwnerGeoModal';

function HorseOwnerSubMenu() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Row className='horseOwnerSubMenu'>
            <Col>
                <div className='svgHolder' onClick={() => setModalShow(true)}><GrMapLocation /></div>
                <div className='mr-2'>Find Stables</div>
            </Col>
            <Col>
                <div className='svgHolder'><FaHorseHead /></div>
                <div className='mr-2'>My Horses</div>
            </Col>
            <Col>Find Stables</Col>
            <Col>Find Stables</Col>

            <HorseOwnerGeoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Row>
    )
}

export default HorseOwnerSubMenu
