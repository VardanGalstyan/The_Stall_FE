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
                <Col className='testMenu' md={6}>
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
