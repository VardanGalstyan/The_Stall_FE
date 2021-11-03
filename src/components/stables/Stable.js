import React from 'react'
import Cover from '../../utils/Cover.jsx'
import { Container, Row } from 'react-bootstrap'
import HorseOwnerNavbar from '../horseOwner/HorseOwnerNavbar'
import OwnerProfile from '../horseOwner/OwnerProfile'
import RiderOptions from '../Rider/RiderOptions/RiderOptions.jsx'
import StableOptions from './StableOptions.jsx'

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
