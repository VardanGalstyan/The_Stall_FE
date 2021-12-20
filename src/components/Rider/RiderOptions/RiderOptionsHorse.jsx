import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { IoAdd } from 'react-icons/io5'
import { GoLocation } from 'react-icons/go'
import { useParams } from 'react-router'



function RiderOptionsHorse({ horses }) {

    const token = localStorage.getItem('token')
    const { id } = useParams()
    const [isExtended, setIsExtended] = useState(false)
    const [userData, setUserData] = useState(null)


    useEffect(() => {
        handleUserDataFetch()
    }, [userData])

    const handleUserDataFetch = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}rider/me`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.ok) {
                const userData = await response.json()
                setUserData(userData)
            }
        } catch (error) {
            console.log({ error });
        }
    }


    const handleRequest = async (horseId) => {
        try {
            const endpoint = userData.horses.every(foundHorse => foundHorse._id !== horseId)
                ? `${process.env.REACT_APP_BASE_URL}rider/me/${id}/request`
                : `${process.env.REACT_APP_BASE_URL}rider/me/${id}/recall`

            const response = await fetch(endpoint, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({ id: horseId })
            })

            if (response.ok) {
                console.log('Request is approved!');
            } else {
                console.log('The request has not been approved!');
            }
        } catch (error) {
            console.log({ error });
        }

    }


    return (
        <Col md={7} xs={11} sm={11} className='singleRiderOption mb-4'>
            <>
                <div className='riderOptionsHorseHeader'>
                    <span>Horses</span>
                    <IoAdd />
                </div>
                {horses ? horses.map((horse, i) => {
                    return (
                        <div key={i} className='riderOptionsHorseBody'>
                            <Col sm={11} md={4} className='riderBodyProfile'>
                                <div className='d-flex align-items-center'>
                                    <div className='ridersHorseImage'>
                                        <img src={horse.avatar ? horse.avatar : "https://picsum.photos/200"} alt="stableCover" />
                                    </div>
                                    <div className='riderHorseInfo' onClick={() => setIsExtended(!isExtended)}>
                                        <h4>{horse.name}</h4>
                                        <div className='riderHorseInfoDetails'>
                                            <GoLocation />
                                            <span>{`${horse.horse_owner.first_name} ${horse.horse_owner.surname}`}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleRequest(horse._id)}
                                    >
                                        {userData && userData.horses.find(myHorse => horse._id === myHorse._id) ? "Recall" : "Request"}</button>
                                </div>
                            </Col>
                            {isExtended &&
                                <Col className='extendedBody'>
                                    <div>
                                        <Col>
                                            <h5>Experience</h5>
                                            <p>{horse.exp_level}</p>
                                        </Col>
                                        <Col>
                                            <h5>Style</h5>
                                            <p>{horse.training_style}</p>
                                        </Col>
                                        <Col>
                                            <h5>Height</h5>
                                            <p>{horse.height}</p>
                                        </Col>
                                        <Col>
                                            <h5>Breed</h5>
                                            <p>{horse.breed}</p>
                                        </Col>
                                        <Col>
                                            <h5>Age</h5>
                                            <p>{horse.date_of_birth}</p>
                                        </Col>
                                        <Col className='description'>
                                            <h5>Description</h5>
                                            <p>{horse.description}</p>
                                        </Col>
                                    </div>
                                </Col>
                            }
                        </div>
                    )
                }) :
                    <div className='riderOptionsStableBody justify-content-center'>
                        <div className='emptyStableInfo'>
                            <h4>Find a Horse?</h4>
                        </div>
                    </div>
                }
            </>
        </Col>
    )
}

export default RiderOptionsHorse
