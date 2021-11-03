import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import useFetch from '../../utils/useFetch'
import RiderOptionsHorse from '../Rider/RiderOptions/RiderOptionsHorse'

function StableOptions() {

    const token = localStorage.getItem('token')
    const { data } = useFetch('http://localhost:3001/horses', token)

    return (
        <Row className='riderOptions'>
            <RiderOptionsHorse data={data} />
        </Row >
    )
}

export default StableOptions
