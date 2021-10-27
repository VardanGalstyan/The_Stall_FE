import { useState, useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import useFetch from '../../utils/useFetch.js'
import Loaders from '../../utils/Loader.js'
import GeoCode from 'react-geocode'
import RiderModal from './RiderModal.js'
import RiderNavbar from './RiderNavbar.js'
import '../../Styles/css/rider.css'


let key = "AIzaSyC84uvf3WFAL2rO7XaRPr6AB-LhYfyvzms"
GeoCode.setApiKey(key)
GeoCode.setLanguage("en")
GeoCode.setRegion("de")
GeoCode.setLocationType("ROOFTOP")

function RiderHome() {

    const [modalShow, setModalShow] = useState(false);
    const [latLon, setLatLon] = useState(null)
    const token = localStorage.getItem('token')
    const { data, isPending, error } = useFetch("http://localhost:3001/rider/me", token)

    const fetchAndTransformData = async () => {
        const response = await fetch(`http://localhost:3001/stables`)
        const stables = await response.json()
        const { country, city, street_name, street_number } = stables[0].address
        console.log('stables', stables);
        console.log(country, city, street_name, street_number);

        GeoCode.fromAddress(country).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log('Address', lat, lng);
            },
            (error) => {
                console.error('error', error);
            }
        )
    }


    useEffect(() => {
        fetchAndTransformData()
    }, [])

    const geoLocate = () => {
        if ('geolocation' in navigator) {
            console.log("geolocation is available");
            navigator.geolocation.getCurrentPosition(position => {
                console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude)
                setLatLon([{ latitude: position.coords.latitude, longitude: position.coords.longitude }])
            });
        } else {
            console.log("geolocation IS NOT available");
        }
    }


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
                            <button onClick={geoLocate}> Geolocate</button>
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
