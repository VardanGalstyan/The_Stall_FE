import { Container } from 'react-bootstrap'
import useFetch from '../../utils/useFetch.js'
import Loaders from '../../utils/Loader.js'
import '../../Styles/css/rider.css'
import HorseOwnerNavbar from '../horseOwner/HorseOwnerNavbar.jsx'
import Cover from '../../utils/Cover.jsx'
import RiderOptions from './RiderOptions/RiderOptions.jsx'
import AboutMe from './AboutMe/AboutMe.jsx'
import UserCalendar from './Calendar/UserCalendar.jsx'


function RiderHome() {

    const token = localStorage.getItem('token')
    const { isPending } = useFetch("http://localhost:3001/rider/me", token)

    return (
        <>
            {
                isPending ?
                    <Loaders /> :
                    <Container fluid className='usersProfile'>
                        <HorseOwnerNavbar />
                        <Cover />
                        <UserCalendar />
                        <AboutMe />
                        <RiderOptions />
                    </Container >
            }
        </>
    )
}

export default RiderHome
