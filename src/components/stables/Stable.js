import '../../Styles/css/stable.css'
import 'react-calendar/dist/Calendar.css';
import Cover from '../../utils/Cover.jsx'
import { Container, Row } from 'react-bootstrap'
import HorseOwnerNavbar from '../horseOwner/HorseOwnerNavbar'
import StableProfile from './StableProfile';
import AboutMe from '../Rider/AboutMe/AboutMe'
import RiderOptionsHorse from '../Rider/RiderOptions/RiderOptionsHorse';
import useFetch from '../../utils/useFetch';
import { useParams } from 'react-router';

function Stable() {

    const { id } = useParams()
    const { data } = useFetch(`${process.env.REACT_APP_BASE_URL}stables/${id}`)

    return (
        <Container fluid className='usersProfile'>
            <HorseOwnerNavbar />
            <Cover />
            <StableProfile data={data} />
            <AboutMe />
            <Row className='riderOptions'>
                <RiderOptionsHorse horses={data && data.horses} />
            </Row>
        </Container >
    )
}

export default Stable
