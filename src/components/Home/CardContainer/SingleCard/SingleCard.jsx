import React, { useState } from 'react'
import './styles/singleCard.css'
import UserContactDetails from './UserContactDetails'
import CardBody from './CardBody'
import UserRatingView from './UserRatingView'
import { RatingView } from 'react-simple-star-rating'
import { Col } from 'react-bootstrap'

function SingleCard() {
    const [showReview, setShowReview] = useState(false)
    const [contactDetails, setContactDetails] = useState(false)

    return (
        <div id='home-single-card'>
            <div className='card-image-holder'>
                <img src="https://picsum.photos/200/300" alt="" />
                <div className={`${!showReview ? 'card-rating-view' : 'card-rating-full-view'}`}
                    onMouseEnter={() => setShowReview(true)}
                    onMouseLeave={() => setShowReview(false)}
                >
                    {!showReview
                        ?
                        <div className='rating-stars'>
                            <RatingView size={15} ratingValue={4} emptyColor={'#fff'} />
                        </div>
                        :
                        <UserRatingView />
                    }
                </div>
                {
                    contactDetails &&
                    <UserContactDetails />
                }
            </div>
            <CardBody handleContactDetails={() => setContactDetails(!contactDetails)} />
        </div >
    )
}

export default SingleCard
