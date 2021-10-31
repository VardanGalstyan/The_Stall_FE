import React, { useState } from 'react'
import "../../Styles/css/userProfile.css";
import "../../Styles/css/stableOwner.css";
import { Container, Row, Col } from "react-bootstrap";
import HorseOwnerNavbar from "../horseOwner/HorseOwnerNavbar";
import StableOwnerProfile from './StableOwnerProfile'
import StableOwnerModal from './StableOwnerModal';
import { HiViewGridAdd } from 'react-icons/hi'

function StableOwnerHome() {

    const [modalShow, setModalShow] = useState(false);

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
                <Col md={4} xs={12} className='col mr-4'>
                    <div className='addStableButton'>
                        <HiViewGridAdd onClick={() => setModalShow(true)} />
                        <p>Create a Stable</p>
                    </div>
                </Col>
                <Col className='col'>
                    <h1>Welcome Anna</h1>
                </Col>
            </Row>
            <StableOwnerModal
                show={modalShow}
                onHide={() => { setModalShow(false) }}
            />
        </Container>
    )
}

export default StableOwnerHome
