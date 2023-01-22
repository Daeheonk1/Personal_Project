import react from "react";
import GoogleMapReact from "google-map-react"

const Map = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div className="map">
            <GoogleMapReact>
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            </GoogleMapReact>

        </div>

    );
};

export default Map;