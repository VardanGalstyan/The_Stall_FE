import React from 'react'
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode"


Geocode.setApiKey(process.env.REACT_APP_GEOLOCATE_GOOGLE);


function GoogleMap({ location }) {


    const handleObject = () => {

        if (location.coordinates) {
            return {
                lat: location.coordinates[1],
                lng: location.coordinates[0]
            }
        }

    }

    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: handleObject(),
            map,
            title: `${location && location}`
        });
        return marker;
    };

    return (
        <div className='details-google-map'>
            {
                location &&
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP }}
                    defaultCenter={handleObject()}
                    defaultZoom={9}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                >
                </GoogleMapReact>
            }
        </div >
    )
}

export default GoogleMap
