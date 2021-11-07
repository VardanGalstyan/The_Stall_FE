import React from 'react'
import Cover from '../../utils/Cover.jsx'
import { Container, Row } from 'react-bootstrap'
import HorseOwnerNavbar from '../horseOwner/HorseOwnerNavbar'
import OwnerProfile from '../horseOwner/OwnerProfile'
import StableOptions from './StableOptions.jsx'
import '../../Styles/css/Styles.css'
import 'react-calendar/dist/Calendar.css';

function Stable() {



    return (
        <Container fluid className='usersProfile'>
            <HorseOwnerNavbar />
            <Cover />
            <Row className='userProfileHeader'>
                <OwnerProfile />
            </Row>
            <StableOptions />
        </Container>
    )
}

export default Stable
