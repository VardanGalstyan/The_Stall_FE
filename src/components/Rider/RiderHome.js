import { Container, Row } from 'react-bootstrap'
import useFetch from '../../utils/useFetch.js'
import Loaders from '../../utils/Loader.js'
import '../../Styles/css/rider.css'
import HorseOwnerNavbar from '../horseOwner/HorseOwnerNavbar.jsx'
import Cover from '../../utils/Cover.jsx'
import StableOwnerProfile from '../stableOwner/StableOwnerProfile.jsx'
import RiderOptions from './RiderOptions/RiderOptions.jsx'
import AboutMe from './AboutMe/AboutMe.jsx'
import UserCalendar from './Calendar/UserCalendar.jsx'


function RiderHome() {

    const token = localStorage.getItem('token')
    const { isPending } = useFetch("http://localhost:3001/rider/me", token)
    const shit = 2

    return (
        <>
            {
                isPending ?
                    <Loaders /> :
                    <Container fluid className='usersProfile'>
                        <HorseOwnerNavbar />
                        < Cover />
                        <Row className='userProfileHeader'>
                            <StableOwnerProfile />
                        </Row>
                        <UserCalendar />
                        <AboutMe />
                        <RiderOptions />
                    </Container >
            }
        </>
    )
}

export default RiderHome
