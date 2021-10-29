import { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import useFetch from '../../utils/useFetch.js'
import Loaders from '../../utils/Loader.js'
import RiderModal from './RiderModal.js'
import RiderNavbar from './RiderNavbar.js'
import '../../Styles/css/rider.css'



function RiderHome() {

    const [modalShow, setModalShow] = useState(false);
    const token = localStorage.getItem('token')
    const { data, isPending } = useFetch("http://localhost:3001/rider/me", token)


    return (
        <>
            {isPending ?
                <Loaders /> :
                <Container fluid id='rider'>
                    <RiderNavbar />
                    <Row>
                        <Col md={2} className='col'>
                            <button>This is for something else</button>
                        </Col>
                        <Col md={8} className='col'>
                            <h1>Welcome {data && data.first_name}</h1>

                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                Launch vertically centered modal
                            </Button></Col>
                        <Col md={2} className='col'>
                            <button>This is for something else</button>
                        </Col>

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
