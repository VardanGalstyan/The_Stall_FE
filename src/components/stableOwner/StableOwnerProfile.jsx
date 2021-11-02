import { RatingView } from 'react-simple-star-rating'
import { Col } from 'react-bootstrap'
import { useState } from 'react'


export default function OwnerProfile() {

    const [isCard, setIsCard] = useState(false)

    return (
        <Col md={6} className='singleUserProfile'>
            <div onClick={() => setIsCard(!isCard)}>
                {
                    !isCard ? <img className='userProfileImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Kjens-28BusmKVIEemYOkSzpjMBm7vilJw&usqp=CAU" alt="profile avatar" /> :
                        <div className='userProfileImage'>
                            <span>Contact Me</span>
                            <p>email : vardan@galstyan.com</p>
                            <p>mobile : + 49 176 34 22344</p>
                        </div>
                }
            </div>
            <div>
                <RatingView className='mt-2' size={20} ratingValue={4} />
                <h4> Anna Bauer</h4>
                <p> Stuttgart, Germany</p>
            </div>
        </Col>
    )
}
