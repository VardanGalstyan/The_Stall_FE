import React from 'react'
import { RatingView } from 'react-simple-star-rating'
import { TiArrowSortedDown } from 'react-icons/ti'

function UserRatingView() {
    return (
        <div className='rating-view'>
            <div className='rating-stars'>
                <RatingView size={15} ratingValue={4} />
            </div>
            <div className='rating-content'>
                <span>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, expedita."</span>
            </div>
            <div className='rating-user'>
                <span>John Doe</span>
            </div>
            <div className='rating-switch-arrow-down'>
                <TiArrowSortedDown />
            </div>
        </div>
    )
}

export default UserRatingView
