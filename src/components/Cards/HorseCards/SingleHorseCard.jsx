import React, { useState } from 'react'
import './styles/singleHorseCard.css'
import UserRatingView from '../StableCards/UserRatingView'
import UserContactDetails from '../StableCards/UserContactDetails'
import { RatingView } from 'react-simple-star-rating'
import { IoLocation } from 'react-icons/io5'
import { IoMdContact } from 'react-icons/io'
import { SiMinutemailer } from 'react-icons/si'
import { useHistory } from 'react-router-dom'
import Loader from 'react-loader-spinner'

function SingleHorseCard({ horse, loading, name }) {

    const [contactUser, setContactUser] = useState(false)
    const [showReview, setShowReview] = useState(false)
    const [contactDetails, setContactDetails] = useState(false)

    const history = useHistory()

    return (

        <div id='home-single-horse-card' key={horse._id}>
            {
                loading ?

                    <div>
                        <Loader
                            className='spinner-loader'
                            type="Oval"
                            color="#3b3b3b"
                            height={80}
                            width={200}
                        />
                    </div> :
                    <>
                        <div className='card-image-holder'>
                            {
                                !horse.avatar
                                    ? <img src='https://www.messagetech.com/wp-content/themes/ml_mti/images/no-image.jpg' alt="horse-avatar" />
                                    : <img src={horse.avatar} alt="horse-avatar" />
                            }
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
                                <UserContactDetails horse={horse} />
                            }
                        </div>
                        <div className='card-body'>
                            <div className='card-title'>
                                <span onClick={() => history.push(`/horses/${horse._id}`)} className='horse-name'>{horse.name}</span>
                                <span className='horse-height'>{horse.height}cm</span>
                            </div>
                            <div className='card-body-horse-type'>
                                <span className='card-description'> {horse.breed}</span>
                            </div>
                            <div className='riding-style'>
                                <span>{horse.training_style}</span>
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
                                        {horse.horse_owner.first_name + ' ' + horse.horse_owner.surname}
                                    </span>
                                </div>
                                <div className='horse-card-stable-details'>
                                    <span className='horse-card-stable-icon'>
                                        <IoLocation />
                                    </span>
                                    <span className='horse-card-stable-name'>
                                        {horse.stable && horse.stable.stable_name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div >
    )
}

export default SingleHorseCard
