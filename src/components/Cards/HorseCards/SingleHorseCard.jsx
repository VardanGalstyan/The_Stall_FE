import React, { useState } from 'react'
import './styles/singleHorseCard.css'
import UserRatingView from '../StableCards/UserRatingView'
import UserContactDetails from '../StableCards/UserContactDetails'
import CardBody from '../StableCards/CardBody'
import { RatingView } from 'react-simple-star-rating'
import { IoLocation } from 'react-icons/io5'
import { IoMdContact } from 'react-icons/io'
import { SiMinutemailer } from 'react-icons/si'

function SingleHorseCard() {

    const [contactUser, setContactUser] = useState(false)
    const [showReview, setShowReview] = useState(false)
    const [contactDetails, setContactDetails] = useState(false)

    return (
        <div id='home-single-horse-card'>
            <div className='card-image-holder'>
                <img src="https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143__340.jpg" alt="" />
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
            <div className='card-body'>
                <div className='card-title'>
                    <span className='horse-name'>Scatto</span>
                    <span className='horse-height'>175cm</span>
                </div>
                <div className='card-body-horse-type'>
                    <span className='card-description'> American Quarter Horse</span>
                </div>
                <div className='riding-style'>
                    <span>Western</span>
                </div>
                <div className='horse-card-belongs'>
                    <div className='card-contact-user'>
                        <span className='card-contact-user-icon'>
                            {
                                !contactUser ?
                                    <IoMdContact /> :
                                    <SiMinutemailer />
                            }
                        </span>
                        <span className='card-contact-user-details'
                            onMouseEnter={() => setContactUser(true)}
                            onMouseLeave={() => setContactUser(false)}
                            onClick={() => setContactDetails(!contactDetails)}
                        >
                            John Doe
                        </span>
                    </div>
                    <div className='horse-card-stable-details'>
                        <span className='horse-card-stable-icon'>
                            <IoLocation />
                        </span>
                        <span className='horse-card-stable-name'>
                            PferdeResort
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleHorseCard
