import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import ReactDOMServer from 'react-dom/server'

import L, { divIcon, Point } from "leaflet"

import MarkerIcon from "../assets/img/icon-location.svg";

import '../assets/scss/Leaflet.scss'

const defaultCenter = [38.9072, -77.0369];
const defaultZoom = 8;
const disneyWorldLatLng = [28.3852, -81.5639];
const disneyLandLatLng = [33.8121, -117.9190];


const Leaflet = (props) => {
    const {geo_data} = props;
    const position = [51.505, -0.09];
    const {location} = geo_data;

    return (
        <div className='map-container'>
            <MapContainer center={[location.latitude, location.longitude]} zoom={defaultZoom} scrollWheelZoom={false} style={{ height: "100%" }}>
                <Marker position={[location.latitude, location.longitude]}>
                    <Popup>Location of ip</Popup>
                </Marker>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
            </MapContainer>
        </div>
    )
}

export default Leaflet;