import '../Styles/scss/geoModal.css'
import { useState, useRef, useEffect } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import { RatingView } from 'react-simple-star-rating'
import { useHistory } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import useSuperCluster from 'use-supercluster'
import { GiHorseshoe } from 'react-icons/gi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaGlobe } from 'react-icons/fa'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'



function GeoModal(props) {


    const mapRef = useRef()
    const [cords, setCords] = useState(null)
    const [zoom, setZoom] = useState(4)
    const [moreHorses, setMoreHorses] = useState(false)
    const [bounds, setBounds] = useState(null)
    const [stables, setStables] = useState([])
    const [stableId, setStableId] = useState('')
    const Marker = ({ children }) => children
    const history = useHistory()

    const arrowOptions = !moreHorses ? <IoIosArrowDropdown /> : <IoIosArrowDropup />

    const points = stables.map(stable => ({
        type: "Feature",
        properties: {
            cluster: false,
            stableId: stable._id,
        },
        geometry: { type: "Point", coordinates: [parseFloat(stable.location.coordinates[0]), parseFloat(stable.location.coordinates[1])] }
    }))

    const { clusters, supercluster } = useSuperCluster({
        points,
        bounds,
        zoom,
        options: { radius: 75, maxZoom: 16 }
    })


    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/stables")
            const { stables } = await response.json()
            if (stables) {
                setStables(stables)
            } else {
                throw new Error('something went wrong')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const geoLocate = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                setCords({ lat: position.coords.latitude, lng: position.coords.longitude })
            });
        } else {
            console.log("Geolocation is invalid!");
        }
    }

    useEffect(() => {
        geoLocate()
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Modal
            {...props}
            size="lg"
            centered
            id='geoModal'
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Stables Around You
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col md={12} sm={12} xs={12} lg={8}>
                        <div id="maps" className="maps">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP }}
                                defaultCenter={cords}
                                defaultZoom={8}
                                yesIWantToUseGoogleMapApiInternals
                                onGoogleApiLoaded={({ map }) => {
                                    mapRef.current = map
                                }}
                                onChange={({ zoom, bounds }) => {
                                    setZoom(zoom)
                                    setBounds([
                                        bounds.nw.lng,
                                        bounds.se.lat,
                                        bounds.se.lng,
                                        bounds.nw.lat
                                    ])
                                }}
                            >
                                {clusters.map(cluster => {
                                    const [longitude, latitude] = cluster.geometry.coordinates;
                                    const { cluster: isCluster, point_count: pointCount } = cluster.properties;
                                    if (isCluster) {
                                        return (
                                            <Marker
                                                key={cluster.id}
                                                lat={latitude}
                                                lng={longitude}>
                                                <div
                                                    className='cluster-marker'
                                                    style={{
                                                        width: `${10 + (pointCount / points.length) * 40}px`,
                                                        height: `${10 + (pointCount / points.length) * 40}px`
                                                    }}
                                                    onClick={() => {
                                                        const expansionZoom = Math.min(
                                                            supercluster.getClusterExpansionZoom(cluster.id), 20
                                                        )
                                                        mapRef.current.setZoom(expansionZoom)
                                                        mapRef.current.panTo({ lat: latitude, lng: longitude })
                                                    }}
                                                >
                                                    {pointCount}
                                                </div>
                                            </Marker>
                                        )
                                    }
                                    return (
                                        <Marker
                                            key={cluster.properties.stableId}
                                            lat={latitude}
                                            lng={longitude}>
                                            <div className='place-marker' onClick={() => setStableId(cluster.properties.stableId)} >
                                                <GiHorseshoe />
                                            </div>
                                        </Marker>
                                    )
                                })}
                            </GoogleMapReact>
                        </div>
                    </Col>
                    <Col>
                        {
                            stableId && stables.filter(stable => stable._id === stableId
                            ).map(single => {
                                return (
                                    <div key={single._id} className='selectedStable'>
                                        <div className='mt-2'>
                                            <h1>{single.stable_name}</h1>
                                            <RatingView ratingValue={5} />
                                            <div className='stableAddress'>
                                                <p>{single.location.formatted_address}</p>
                                            </div>
                                            <div className='stableContacts mb-4'>
                                                <div>
                                                    <span className='mr-3'><BsFillTelephoneFill /></span>
                                                    <span>{single.contacts.phone}</span>
                                                </div>
                                                <div>
                                                    <span className='mr-3'><MdEmail /></span>
                                                    <span>{single.contacts.email}</span>
                                                </div>
                                                <div>
                                                    <span className='mr-3'><FaGlobe /></span>
                                                    <span>{single.contacts.web}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className='stableHorses'>
                                                    <span>{`Horses : ${single.horses.length}`}</span>
                                                    <span onClick={() => setMoreHorses(!moreHorses)}>{arrowOptions}</span>
                                                </div>
                                                {
                                                    moreHorses
                                                    && single.horses.map((horse, i) => {
                                                        return (
                                                            <>
                                                                {single.horses.length !== 0 ?
                                                                    <div key={i} className='horse-styles'>
                                                                        <span>{horse.training_style}</span>
                                                                    </div> :
                                                                    <div>
                                                                        <span>No horses in this stable... </span>
                                                                    </div>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div>{`Equestrians : ${single.riders.length}`}</div>
                                            <div>{`Available Boxes :${single.number_of_boxes - single.horses.length}`}</div>
                                        </div>
                                        <div className='routerButton'>
                                            <button onClick={() => history.push(`/stables/${single._id}`)}>Check this out!</button>
                                            <button>Favorite</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => {
                    props.onHide()
                    setMoreHorses(false)
                }}>
                    Close</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default GeoModal

