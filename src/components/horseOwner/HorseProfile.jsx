import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { RatingView } from 'react-simple-star-rating'
import { IoAddSharp } from 'react-icons/io5'
import AddHorseModal from './AddHorseModal';


function HorseProfile() {

    const [modalShow, setModalShow] = useState(false);


    return (
        <>
            <Col className='horsesProfile'>
                <div>
                    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B875/production/_102512274_gettyimages-518360318.jpg" alt="profile avatar" />
                </div>
                <div>
                    <RatingView size={15} ratingValue={4} />
                    <h4> Scatto</h4>
                </div>
                <div onClick={() => setModalShow(true)} className='addHorseButton'>
                    <IoAddSharp />
                </div>

                <AddHorseModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </Col>
        </>
    )
}

export default HorseProfile
