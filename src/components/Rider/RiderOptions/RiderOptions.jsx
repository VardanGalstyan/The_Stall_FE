import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import RiderOptionsHorse from './RiderOptionsHorse'
import RiderOptionsStable from './RiderOptionsStable'
import useFetch from '../../../utils/useFetch'

function RiderOptions() {

    const token = localStorage.getItem("token");
    const { data } = useFetch('http://localhost:3001/rider/me', token)
    console.log(data);

    return (
        <Row className='riderOptions'>
            <RiderOptionsHorse horses = {data && data.horses} />
            <RiderOptionsStable />
        </Row>
    )
}

export default RiderOptions
