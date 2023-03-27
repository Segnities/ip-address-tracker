import { useQuery } from "react-query";
import { fetchGeocode } from "../API/geoipify";
import "../assets/scss/DataPanel.scss";

function DataPanel(props) {
    const { ip_geo_data } = props;

    const { data, isFetching } = useQuery('geocodeData', () => fetchGeocode(ip_geo_data.city.name));

    console.log(data);

    if (isFetching) {
        return <span>Loading...</span>
    }

    return (
        <div className="data-container">
            <section className="ip-location">
                <h4>Ip address</h4>
                <p className="data">{ip_geo_data.ip}</p>
            </section>
            <section className="location">
                <h4>Location</h4>
                <p className="data">{ip_geo_data.city.name}, {ip_geo_data.country.iso_code}, {ip_geo_data.country.geoname_id}</p>
            </section>
            <section className="timezone">
                <h4>Timezone</h4>
                <p className="data"></p>
            </section>
            <section className="isp">
                <h4>Isp</h4>
                <p className="data"></p>
            </section>
        </div>
    )
}

export default DataPanel;