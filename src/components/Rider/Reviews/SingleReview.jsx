import React from 'react'
import { Col } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

function SingleReview() {
    return (
        <div className='singleReview'>
            <div className='d-flex singleReviewHeader'>
                <Col xs={2} className='px-2 py-1'> <img src="https://picsum.photos/50" alt="profileImage" /> </Col>
                <Col className='reviewHeaderUser'>
                    <h6>John Bishop</h6>
                    <p>Advanced Rider</p>
                </Col>
                <Col className='individualRating'>
                    <div className='d-flex'>
                        <Rating ratingValue={4} size={15} className='mr-1 mt-1' />
                        <span>4.9</span>
                    </div>
                </Col>
            </div>
            <div className='singleReviewBody'>
                <Col className='px-2'>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam neque, tempore ea repudiandae tempora laborum alias quo placeat aut.</span>
                </Col>
            </div>
        </div>
    )
}

export default SingleReview
