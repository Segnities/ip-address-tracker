import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import '../assets/scss/Leaflet.scss'

const defaultCenter = [38.9072, -77.0369];
const defaultZoom = 8;
const disneyWorldLatLng = [28.3852, -81.5639];
const disneyLandLatLng = [33.8121, -117.9190];


const Leaflet = (props) => {
    const position = [51.505, -0.09];

    return (
        <div className='map-container'>
            <MapContainer center={defaultCenter} zoom={defaultZoom} scrollWheelZoom={false} style={{height: "100%"}}>
            <Marker position={defaultCenter}>
                <Popup>Location of ip</Popup>
            </Marker>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
            </MapContainer>
        </div>
    )
}

export default Leaflet;