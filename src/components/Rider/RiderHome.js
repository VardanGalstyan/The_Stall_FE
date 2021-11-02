import { Container, Row } from 'react-bootstrap'
import useFetch from '../../utils/useFetch.js'
import Loaders from '../../utils/Loader.js'
import '../../Styles/css/rider.css'
import HorseOwnerNavbar from '../horseOwner/HorseOwnerNavbar.jsx'
import Cover from '../../utils/Cover.jsx'
import StableOwnerProfile from '../stableOwner/StableOwnerProfile.jsx'
import RiderOptions from './RiderOptions/RiderOptions.jsx'



function RiderHome() {

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
                    <RiderOptions />
                </Container >
            }
        </>
    )
}

export default RiderHome
