import { useState, useRef, useEffect } from 'react'
import { Modal, Button, Col, Row } from 'react-bootstrap'
import { MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md'
import { RatingView } from 'react-simple-star-rating'
import { useHistory } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import useSuperCluster from 'use-supercluster'


function RiderModal(props) {


    const mapRef = useRef()
    const [cords, setCords] = useState("")
    const [zoom, setZoom] = useState(4)
    const [bounds, setBounds] = useState(null)
    const [stables, setStables] = useState([])
    const [stableId, setStableId] = useState('')
    const Marker = ({ children }) => children
    const history = useHistory()

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
            const data = await response.json()
            if (data) {
                setStables(data)
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
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={8}>
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
                                            <button className='crime-marker' onClick={() => setStableId(cluster.properties.stableId)} >
                                                <img src="https://picsum.photos/200" alt='Crime does not pay'></img>
                                            </button>
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
                                    <div key={single._id}>
                                        <h1>{single.stable_name}</h1>
                                        <RatingView ratingValue={4} />
                                        <p>{single.location.formatted_address}</p>
                                        <div>{`horses : ${single.horses.length}`}</div>
                                        <div>{`Equestrians : ${single.equestrians.length}`}</div>
                                        <div>{`horses : ${single.horses.length}`}</div>
                                        <span><MdFavorite /></span>
                                        <span><MdOutlineFavoriteBorder /></span>
                                        <button onClick={() => history.push(`/stable/${single._id}`)}>Check it up!</button>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default RiderModal

