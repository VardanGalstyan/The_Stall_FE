import { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import useFetch from '../../utils/useFetch.js'
import Loaders from '../../utils/Loader.js'
import RiderModal from './RiderModal.js'
import RiderNavbar from './RiderNavbar.js'
import '../../Styles/css/rider.css'
import HorseOwnerNavbar from '../horseOwner/HorseOwnerNavbar.jsx'
import Cover from '../../utils/Cover.jsx'
import StableOwnerProfile from '../stableOwner/StableOwnerProfile.jsx'



function RiderHome() {

    const [modalShow, setModalShow] = useState(false);
    const token = localStorage.getItem('token')
    const { data, isPending } = useFetch("http://localhost:3001/rider/me", token)


    return (
        <>
            {isPending ?
                <Loaders /> :
                <Container fluid className='usersProfile'>
                    <HorseOwnerNavbar />
                    <Cover />
                    <Row className='userProfileHeader'>
                        <StableOwnerProfile />
                    </Row>
                    <Row>
                        <RiderModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Row>
                </Container >
            }
        </>
    )
}

export default RiderHome
