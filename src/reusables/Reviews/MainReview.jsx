import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { Col } from 'react-bootstrap'
import SingleReview from './SingleReview'

function MainReview() {
    return (
        <Col md={5} sm={11} xs={11} className='aboutReview'>
            <div className='reviewHeaders'>
                Reviews
            </div>
            <div className='reviewBody'>
                <div className='starRatingHeader'>
                    <Rating ratingValue={4} size={20} className='mr-2 mt-1' />
                    <span>4.6</span>
                </div>
                <div className='singleReviewContainer'>
                    <SingleReview />
                    <SingleReview />
                </div>
            </div>
        </Col>
    )
}

export default MainReview
