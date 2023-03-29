import { useState } from 'react';

import Header from './components/Header';
import Leaflet from "./components/Leaflet";
import DataPanel from "./components/DataPanel";

import { useQuery } from 'react-query';
import { fetchGeocode, fetchIp } from './API/geoipify';

import './App.scss';


const App = () => {
  const [ip, setIp] = useState('');
  const { data: ipData, status, error, isFetching: isIpDataFething } = useQuery(['ipQuery', ip], () => fetchIp(ip));

  const { data:geocodeData, isFetching:isGeocodeFetching, status:geocodeStatus } = useQuery(['geocodeQuery', ipData?.city?.name], () => fetchGeocode(ipData?.city?.name), {
    enabled: !!ipData?.city?.name
  })


  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (isIpDataFething) {
    return <span>Refreshing...</span>
  }

  return (
    <div className="App" data-testid='appContainer'>
      <Header ip={ip} setIp={setIp} />
      <DataPanel ip_geo_data={ipData} geocode_data={{geocodeData, isGeocodeFetching, geocodeStatus}} />
      <Leaflet ip_geo_data={ipData} />
    </div>
  )
}

export default App
