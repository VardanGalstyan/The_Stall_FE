import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router'
import useFetch from '../../utils/useFetch.js'
import Loaders from '../../utils/Loader.js'
import GoogleMapReact from 'google-map-react'
import useSuperCluster from 'use-supercluster'
import GeoCode from 'react-geocode'



const Marker = ({ children }) => children
GeoCode.setApiKey('AIzaSyC84uvf3WFAL2rO7XaRPr6AB-LhYfyvzms')
GeoCode.setLanguage("en")
GeoCode.setRegion("de")
GeoCode.setLocationType("ROOFTOP")

function RiderHome() {

    GeoCode.fromAddress("Eiffel Tower").then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log('Eiffel Tower', lat, lng);
        },
        (error) => {
            console.error('error shit', error);
        }
    );

    const mapRef = useRef()
    const [zoom, setZoom] = useState(4)
    const [bounds, setBounds] = useState(null)
    const [crimes, setCrimes] = useState([])
    const [latLon, setLatLon] = useState(null)
    const history = useHistory()
    const token = localStorage.getItem('token')
    const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10"
    const { data, isPending, error } = useFetch("http://localhost:3001/rider/me", token)

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        history.push('/loginOption')
    }

    const geolocate = () => {
        if ('geolocation' in navigator) {
            console.log("geolocation is available");
            navigator.geolocation.getCurrentPosition(position => {
                console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude)
                setLatLon([{ latitude: position.coords.latitude, longitude: position.coords.longitude }])
                console.log(latLon);
            });
        } else {
            console.log("geolocation IS NOT available");
        }
    }

    const points = crimes.map(crime => ({
        type: "Feature",
        properties: {
            cluster: false,
            crimeId: crime.id,
            category: crime.category
        },
        geometry: { type: "Point", coordinates: [parseFloat(crime.location.longitude), parseFloat(crime.location.latitude)] }
    }))

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

    const { clusters, supercluster } = useSuperCluster({
        points,
        bounds,
        zoom,
        options: { radius: 75, maxZoom: 16 }
    })

    return (
        <>
            {isPending ?
                <Loaders /> :
                <div id='rider'>
                    <h1>Welcome {data && data.first_name}</h1>
                    <button onClick={logout}>Log Out</button>
                    <button onClick={geolocate}> Geolocate</button>
                    <h2>My Map</h2>
                    <div id="maps" className="maps">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP }}
                            defaultCenter={{ lat: 48.8129164, lng: 9.9240992 }}
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
                                console.log(cluster);
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

                    {
                        // getting Geolocation and updating in the database. 
                        // geolocation by an address 
                        // when user fills in the address bar, it automatically updates the geolocation of the property. 
                        // then, once we have the geolocation we update the information by filtering the closes ones. 
                    }
                </div>
            }
        </>
    )
}

export default RiderHome
