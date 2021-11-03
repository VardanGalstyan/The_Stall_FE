import { RatingView } from 'react-simple-star-rating'
import { Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import useFetch from '../../utils/useFetch'


export default function OwnerProfile() {

    const { data } = useFetch("http://localhost:3001/stables")
    const { id } = useParams()


    return (
        <>
            {data && data.filter(stables => id === stables._id).map(stable => {
                return (
                    <Col key={stable._id} className='singleUserProfile'>
                        <div><img className='userProfileImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Kjens-28BusmKVIEemYOkSzpjMBm7vilJw&usqp=CAU" alt="profile avatar" /></div>
                        <div>
                            <RatingView size={20} ratingValue={4} className='mt-2' />
                            <h4>{stable.stable_name}</h4>
                            <p> {stable.location.formatted_address}</p>
                        </div>
                    </Col>
                )
            })
            }
        </>
    )
}
