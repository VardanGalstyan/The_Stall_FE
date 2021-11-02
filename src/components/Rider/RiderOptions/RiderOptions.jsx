import React from 'react'
import { Row } from 'react-bootstrap'
import RiderOptionsHorse from './RiderOptionsHorse'
import RiderOptionsStable from './RiderOptionsStable'

function RiderOptions() {
    return (
        <Row className='riderOptions'>
            <RiderOptionsStable />
            <RiderOptionsHorse />
        </Row>
    )
}

export default RiderOptions
