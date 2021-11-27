import React from 'react'
import './styles/jumbotron.css'
import { RatingView } from 'react-simple-star-rating'

function Jumbotron() {
    return (
        <div id='jumbotron'>
            <div className='jumbotron-main-content'>
                <img className='jumbotron-cover-image' src="https://media.istockphoto.com/photos/horseback-riding-wide-angle-isolated-on-white-picture-id157421630?k=20&m=157421630&s=612x612&w=0&h=HQ-ty_XsJrPqeYXwMoRKZm_VdHcJbNq_9_4vXSw6Z5U=" alt="happyUsers" />
                <div className='jumbotron-positive-reviews'>
                    <RatingView size={10} stars={5} ratingValue={5} />
                    <p>"This platform has really united the entire equine community"</p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
