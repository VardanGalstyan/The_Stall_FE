import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { RatingView } from 'react-simple-star-rating'

function StableProfile({ data }) {


    return (
        <Row className='stableMainProfile'>
            <Col className='stableProfileHeader'>
                <div>
                    <img src="https://picsum.photos/200" alt="Stable Profile" />
                </div>
                <div className='stableProfileDescription ml-3'>
                    <div className='stableRatingValue'>
                        <RatingView className='mt-1 mr-2' size={20} ratingValue={4} />
                        <span >4.5</span>
                    </div>
                    <h1>{data && data.stable_name}</h1>
                    <p>{data && data.location.formatted_address}</p>
                </div>
            </Col>
        </Row>
    )
}

export default StableProfile
