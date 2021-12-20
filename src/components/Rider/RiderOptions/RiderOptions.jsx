import { Row } from 'react-bootstrap'
import RiderOptionsHorse from './RiderOptionsHorse'
import RiderOptionsStable from './RiderOptionsStable'
import useFetch from '../../../utils/useFetch'

function RiderOptions() {

    const token = localStorage.getItem("token");
    const { data } = useFetch(`${process.env.REACT_APP_BASE_URL}rider/me`, token)

    return (
        <Row className='riderOptions'>
            <RiderOptionsHorse horses={data && data.horses} />
            <RiderOptionsStable horses={data && data.horses} />
        </Row>
    )
}

export default RiderOptions
