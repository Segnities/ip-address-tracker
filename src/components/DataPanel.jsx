import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchGeocode } from "../API/geoipify";
import "../assets/scss/DataPanel.scss";
import { getUTCTime } from "../utils/utc-time";

function DataPanel(props) {
    const { geocode_data, ip_geo_data } = props;

    const { geocodeData, isGeocodeFetching, geocodeStatus } = geocode_data;

    const [timezoneName, setTimezoneName] = useState('');
    const [utcTime, setUtcTime] = useState('');

    useEffect(() => {
        setTimezoneName(geocodeData?.features[0]?.properties?.timezone?.name)
    }, [!isGeocodeFetching]);

    useEffect(() => {
        const totalTime = getUTCTime(geocodeData?.features[0]?.properties?.timezone?.name);
        setUtcTime(totalTime);

        const interval = setInterval(() => {
            setUtcTime(totalTime);
        }, 1000);

        return () => {
            clearInterval(interval);
        }

    }, [timezoneName]);

    if (isGeocodeFetching) {
        return <span>Refreshing...</span>
    }

    if (geocodeStatus === 'loading') {
        return <span>Loading...</span>
    }

    return (
        <div className="data-container">
            <section className="ip-location">
                <h4>Ip address</h4>
                <p className="data">{ip_geo_data?.ip}</p>
            </section>
            <section className="location">
                <h4>Location</h4>
                <p className="data">{ip_geo_data?.city?.name}, {ip_geo_data.country.iso_code}, {ip_geo_data?.country?.geoname_id}</p>
            </section>
            <section className="timezone">
                <h4>Timezone</h4>
                <p className="data">
                    UTC - {utcTime}
                </p>
            </section>
            <section className="isp">
                <h4>Isp</h4>
                <p className="data"></p>
            </section>
        </div>
    )
}

export default DataPanel;