import React from 'react'
import { Col } from 'react-bootstrap'

function SingleUserProperty({ url, keys, value }) {
    return (
        <Col className='singleUserProperty'>
            <div className='singleUserPropertyHeader'>
                <img src={url} alt="ridingStyles" />
                <div>{keys}</div>
            </div>
            <div className='singleUserPropertyBody'>
                <span>{value}</span>
            </div>
        </Col>
    )
}

export default SingleUserProperty
