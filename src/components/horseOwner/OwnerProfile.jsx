import { RatingView } from 'react-simple-star-rating'
import { Col } from 'react-bootstrap'


export default function OwnerProfile() {
    return (
        <Col className='singleUserProfile'>
            <div><img className='userProfileImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Kjens-28BusmKVIEemYOkSzpjMBm7vilJw&usqp=CAU" alt="profile avatar" /></div>
            <div>
                <RatingView size={20} ratingValue={4} />
                <h4> Anna Bauer</h4>
                <p> Stuttgart, Germany</p>
            </div>
        </Col>
    )
}
