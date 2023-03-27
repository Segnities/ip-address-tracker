import { useEffect, useState } from 'react';

import Header from './components/Header';
import Leaflet from "./components/Leaflet";
import DataPanel from "./components/DataPanel";

import { useQuery } from 'react-query';
import { fetchIp, fetchGeocode } from './API/geoipify';

import './App.scss';


const App = () => {
  const [ip, setIp] = useState('');
  const { data: ipData, error, isFetching: isIpDataFething } = useQuery('ipQuery', () => fetchIp(ip));

  if (isIpDataFething) {
    return <span>Loading...</span>
  }

  return (
    <div className="App" data-testid='appContainer'>
      <Header ip={ip} setIp={setIp} />
      <DataPanel ip_geo_data={ipData} />
      <Leaflet ip_geo_data={ipData} />
    </div>
  )
}

export default App
