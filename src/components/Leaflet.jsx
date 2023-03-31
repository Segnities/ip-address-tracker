import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet"

import Icon from "../assets/img/icon-location.svg";


import '../assets/scss/Leaflet.scss'


const MARKER_ICON = L.icon({
    iconUrl: Icon,
    iconSize: [34, 40],
})

const Leaflet = (props) => {
    const { ip_geo_data } = props;
    const { location } = ip_geo_data;

    return (
        <div className='map-container'>
            <MapContainer center={[location.latitude, location.longitude]} zoom={13} scrollWheelZoom={false} style={{ height: "100%" }}>
                <Marker icon={MARKER_ICON} position={[location.latitude, location.longitude]}>
                    <Popup>Location of ip</Popup>
                </Marker>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
            </MapContainer>
        </div>
    )
}

export default Leaflet;