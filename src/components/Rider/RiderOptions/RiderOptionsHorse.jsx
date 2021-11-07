import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { IoAdd } from 'react-icons/io5'
import { GoLocation } from 'react-icons/go'

function RiderOptionsHorse({ horses }) {

    const [isExtended, setIsExtended] = useState(false)

    return (
        <Col md={7} xs={11} xs={11} className='singleRiderOption'>
            <>
                <div className='riderOptionsHorseHeader'>
                    <span>Horses</span>
                    <IoAdd />
                </div>
                {horses && horses.map((horse, i) => {
                    return (
                        <div key={i} className='riderOptionsHorseBody' onClick={() => setIsExtended(!isExtended)}>
                            <Col sm={11} md={4} className='riderBodyProfile'>
                                <div className='ridersHorseImage'>
                                    <img src={horse.avatar ? horse.avatar : "https://picsum.photos/200"} alt="stableCover" />
                                </div>
                                <div className='riderHorseInfo'>
                                    <h4>{horse.name}</h4>
                                    <div className='riderHorseInfoDetails'>
                                        <GoLocation />
                                        <span>{`${horse.horse_owner.first_name} ${horse.horse_owner.surname}`}</span>
                                    </div>
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
                })
                }
            </>
        </Col>
    )
}

export default RiderOptionsHorse
