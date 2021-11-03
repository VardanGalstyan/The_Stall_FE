import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { IoAdd } from 'react-icons/io5'
import { GoLocation } from 'react-icons/go'

function RiderOptionsHorse({ data }) {

    const [isExtended, setIsExtended] = useState(false)

    return (
        <Col md={6} xs={11} className='singleRiderOption'>
            <>
                <div className='header'>
                    <span>Horses</span>
                    <IoAdd />
                </div>
                {data && data.map(horse => {
                    return (
                        <div className='body' onClick={() => setIsExtended(!isExtended)}>
                            <div>
                                <img src={horse.avatar ? horse.avatar : "https://picsum.photos/200"} alt="stableCover" />
                            </div>
                            <div>
                                <h4>{horse.name}</h4>
                                <div>
                                    <GoLocation />
                                    <p>{`${horse.horse_owner[0].first_name} ${horse.horse_owner[0].surname}`}</p>
                                </div>
                            </div>
                            {isExtended &&
                                <>
                                    <div className='extendedBody'>
                                        <div>
                                            <div>
                                                <h5>Experience</h5>
                                                <p>{horse.exp_level}</p>
                                            </div>
                                            <div>
                                                <h5>Style</h5>
                                                <p>{horse.training_style}</p>
                                            </div>
                                            <div>
                                                <h5>Height</h5>
                                                <p>{horse.height}</p>
                                            </div>
                                            <div>
                                                <h5>Breed</h5>
                                                <p>{horse.breed}</p>
                                            </div>
                                            <div>
                                                <h5>Age</h5>
                                                <p>{horse.date_of_birth}</p>
                                            </div>
                                            <div className='description'>
                                                <h5>Description</h5>
                                                <p>{horse.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
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
