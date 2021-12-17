import React, { useState } from 'react'
import './styles/singleCard.css'
import UserContactDetails from './UserContactDetails'
import CardBody from './CardBody'
import UserRatingView from './UserRatingView'
import { RatingView } from 'react-simple-star-rating'



function SingleCard({ stable }) {
    const [showReview, setShowReview] = useState(false)
    const [contactDetails, setContactDetails] = useState(false)

    return (
        <div id='home-single-card'>
            <div className='card-image-holder'>
                {
                    stable && !stable.avatar
                        ? <img src='https://www.messagetech.com/wp-content/themes/ml_mti/images/no-image.jpg' alt="stable-avatar" />
                        : <img src={stable && stable.avatar} alt="stable-avatar" />
                }
                <div className={`${!showReview ? 'card-rating-view' : 'card-rating-full-view'}`}
                    onMouseEnter={() => setShowReview(true)}
                    onMouseLeave={() => setShowReview(false)}
                >
                    {!showReview
                        ?
                        <div className='rating-stars'>
                            <RatingView
                                size={15}
                                ratingValue={4}
                                emptyColor={'#fff'}
                            />
                        </div>
                        :
                        <UserRatingView />
                    }
                </div>
                {
                    contactDetails &&
                    <UserContactDetails stable={stable && stable} />
                }
            </div>
            <CardBody
                stable={stable && stable}
                handleContactDetails={() => setContactDetails(!contactDetails)}
            />
        </div >
    )
}

export default SingleCard
