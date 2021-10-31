import React, { useState } from 'react'
import "../../Styles/css/userProfile.css";
import "../../Styles/css/stableOwner.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HorseOwnerNavbar from "../horseOwner/HorseOwnerNavbar";
import StableOwnerProfile from './StableOwnerProfile'
import { HiViewGridAdd } from 'react-icons/hi'

function StableOwnerHome() {

    const [test, setTest] = useState(false)

    return (
        <Container fluid='xl' className='usersProfile'>
            <HorseOwnerNavbar />
            <Row className="main-header">
                <Col className="cover">
                    <div>
                        <img
                            src="https://picsum.photos/1000/400"
                            alt="profile background"
                        />
                    </div>
                </Col>
            </Row>
            <Row className='userProfileHeader'>
                <StableOwnerProfile />
            </Row>
            <Row className='stableOptions'>
                <Col md={4} xs={12} className='col mr-4' onClick={() => setTest(!test)}>
                    <div className='addStableButton'>
                        <HiViewGridAdd />
                        <p>Add a Stable</p>
                    </div>
                </Col>
                <Col className='col' onClick={() => setTest(!test)}>
                    <h5>Create your first stable...</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default StableOwnerHome
