import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { IoAdd } from 'react-icons/io5'
import { GoLocation } from 'react-icons/go'

function RiderOptionsHorse() {

    const [isExtended, setIsExtended] = useState(false)

    return (
        <Col md={4} xs={11} className='singleRiderOption'>
            <>
                <div className='header'>
                    <span>Horses</span>
                    <IoAdd />
                </div>
                <div className='body' onClick={() => setIsExtended(!isExtended)}>
                    <div>
                        <img src="https://picsum.photos/200" alt="stableCover" />
                    </div>
                    <div>
                        <h4>Horse Name</h4>
                        <div>
                            <GoLocation />
                            <p>location</p>
                        </div>
                    </div>
                </div>
            </>
            {isExtended &&
                <>
                    <div className='extendedBody'>
                        <div>
                            <div>
                                <h5>Experience</h5>
                                <p>location</p>
                            </div>
                            <div>
                                <h5>Style</h5>
                                <p>Beginner</p>
                            </div>
                            <div>
                                <h5>Height</h5>
                                <p>176cm</p>
                            </div>
                            <div>
                                <h5>Breed</h5>
                                <p>American Quarter Horse</p>
                            </div>
                            <div>
                                <h5>Age</h5>
                                <p>12</p>
                            </div>
                            <div className='description'>
                                <h5>Description</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quidem sapiente consectetur perferendis voluptates veniam sint, dolor aspernatur suscipit esse.</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </Col>
    )
}

export default RiderOptionsHorse
