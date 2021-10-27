import { useState, useRef, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react'
import useSuperCluster from 'use-supercluster'


function RiderModal(props) {

    const mapRef = useRef()
    const [zoom, setZoom] = useState(4)
    const [bounds, setBounds] = useState(null)
    const [crimes, setCrimes] = useState([])
    const Marker = ({ children }) => children
    const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10"

    const points = crimes.map(crime => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: crime.id,
            category: crime.category
        },
        geometry: { type: "Point", coordinates: [parseFloat(crime.location.longitude), parseFloat(crime.location.latitude)] }
    }))

    const { clusters, supercluster } = useSuperCluster({
        points,
        bounds,
        zoom,
        options: { radius: 75, maxZoom: 16 }
    })


    const fetchData = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            if (data) {
                setCrimes(data)
            } else {
                throw new Error('something went wrong')
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
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
                <div id="maps" className="maps">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP }}
                        defaultCenter={{ lat: -17.679742, lng: -149.406843 }}
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
                                    key={cluster.properties.crimeId}
                                    lat={latitude}
                                    lng={longitude}>
                                    <button className='crime-marker'>
                                        <img src="https://picsum.photos/200" alt='Crime does not pay'></img>
                                    </button>
                                </Marker>
                            )
                        })}
                    </GoogleMapReact>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RiderModal

