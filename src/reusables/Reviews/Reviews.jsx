import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { Col } from 'react-bootstrap'
import SingleReview from './SingleReview'
import './style/reviews.css'

function Reviews() {
    return (
        <div className='profile-container mt-2'>
            <div className='review-container-header'>
                <div className='profile-container-title'>
                    Reviews
                </div>
                <div className='star-rating-header'>
                    <Rating ratingValue={4} size={20} className='mr-2 mt-1' />
                    <span>4.6</span>
                </div>
            </div>
            <div className='review-body'>
                <div className='single-review-container'>
                    <SingleReview />
                    <SingleReview />
                </div>
            </div>
        </div>
    )
}

export default Reviews
