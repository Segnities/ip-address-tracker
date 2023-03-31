import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import '../assets/scss/Leaflet.scss'


const Leaflet = (props) => {
    const { ip_geo_data } = props;
    const { location } = ip_geo_data;

    return (
        <div className='map-container'>
            <MapContainer center={[location.latitude, location.longitude]} zoom={13} scrollWheelZoom={false} style={{ height: "100%" }}>
                <Marker position={[location.latitude, location.longitude]}>
                    <Popup>Location of ip</Popup>
                </Marker>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
            </MapContainer>
        </div>
    )
}

export default Leaflet;