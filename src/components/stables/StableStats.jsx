import React from 'react'
import { Row, Col } from 'react-bootstrap'

function StableStats() {
    return (
        <Row className='MainStable'>
            <div className='StableStatMenu'>
                <Col sm={5} className='singleStatMenu'>
                    <span className='statMenuHeader'> Boxes</span>
                    <div className='statMenuBody'>
                        <Col>8</Col>
                        <Col>16</Col>
                    </div>
                </Col>
                <Col sm={5} className='singleStatMenu'>
                    <span className='statMenuHeader'> Horses</span>
                    <div className='statMenuBody'>
                        <Col>8</Col>
                        <Col>16</Col>
                    </div>
                </Col>
                <Col sm={5} className='singleStatMenu'>
                    <span className='statMenuHeader'> Riders</span>
                    <div className='statMenuBody'>
                        <Col>8</Col>
                    </div>
                </Col>
                <Col sm={5} className='singleStatMenu'>
                    <span className='statMenuHeader'>Horse Owners</span>
                    <div className='statMenuBody'>
                        <Col>8</Col>
                    </div>
                </Col>
            </div>
        </Row>
    )
}

export default StableStats
