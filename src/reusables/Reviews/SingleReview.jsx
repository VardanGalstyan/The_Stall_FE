import React from 'react'
import { Rating } from 'react-simple-star-rating'

function SingleReview() {
    return (
        <div className='single-review'>
            <div className='single-review-header'>
                <div className='single-review-user'>
                    <div className='single-review-avatar'>
                        <img
                            src="https://picsum.photos/50"
                            alt="review-avatar"
                        />
                    </div>
                    <div className='single-review-user-details'>
                        <span className='user-name'>John Bishop</span>
                        <span className='user-experience'>Advanced Rider</span>
                    </div>
                </div>
                <div className='individualRating'>
                    <div className='single-review-average-rating'>
                        <Rating
                            ratingValue={4}
                            size={15}
                            className='mr-1 mt-1'
                            fillColor='#3b3b3b'
                            emptyColor='#fff'
                        />
                        <span className>4.9</span>
                    </div>
                </div>
            </div>
            <div className='single-review-body'>
                <div className='single-review-content'>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam neque, tempore ea repudiandae tempora laborum alias quo placeat aut.</span>
                </div>
            </div>
        </div>
    )
}

export default SingleReview
