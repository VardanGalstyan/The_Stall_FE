import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode"


Geocode.setApiKey(process.env.REACT_APP_GEOLOCATE_GOOGLE);


function StableGoogleMap({ location }) {

    const [geoLocation, setGeoLocation] = useState({})

    useEffect(() => {
        Geocode.fromAddress(`${location}`).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                setGeoLocation({ lat, lng })
            },
            error => {
                console.error(error);
            }
        );
    }, [location])

    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: geoLocation,
            map,
            title: `${location}`
        });
        return marker;
    };

    return (
        <div className='details-google-map'>
            {geoLocation.lng &&
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP }}
                    defaultCenter={geoLocation}
                    defaultZoom={9}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                >
                </GoogleMapReact>
            }
        </div >
    )
}

export default StableGoogleMap
