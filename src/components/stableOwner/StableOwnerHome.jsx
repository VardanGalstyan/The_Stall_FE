import React, { useState } from 'react'
import "../../Styles/css/userProfile.css";
import "../../Styles/css/stableOwner.css";
import { Container, Row, Col } from "react-bootstrap";
import HorseOwnerNavbar from "../horseOwner/HorseOwnerNavbar";
import StableOwnerProfile from './StableOwnerProfile'
import StableOwnerModal from './StableOwnerModal';
import { HiViewGridAdd } from 'react-icons/hi'
import Cover from '../../utils/Cover';

function StableOwnerHome() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Container fluid className='usersProfile'>
            <HorseOwnerNavbar />
            <Cover />
            <Row className='userProfileHeader'>
                <StableOwnerProfile />
            </Row>
            <Row className='stableOptions'>
                <Col md={8} className='welcomeBox'>
                    <h2>Welcome</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea ipsum corrupti quia culpa labore delectus nesciunt quidem alias autem cumque, voluptatem dolor ex ullam pariatur earum tempore, ipsam itaque.</p>
                </Col>
                <Col md={4} className='welcomeBox'>
                    <div className='addStableButton'>
                        <HiViewGridAdd onClick={() => setModalShow(true)} />
                        <p>Create a Stable</p>
                    </div>
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
