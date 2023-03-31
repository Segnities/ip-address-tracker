import { useState } from 'react';

import Header from './components/Header';
import Leaflet from "./components/Leaflet";
import DataPanel from "./components/DataPanel";

import { useQuery } from 'react-query';
import { fetchGeocode, fetchIp } from './API/geoipify';

import './App.scss';
import SomeError from './components/SomeError';


const App = () => {
  const [ip, setIp] = useState('');
  const [fetchByIp, setFetchByIp] = useState('');

  const { data: ipData, error: ipError, status: ipStatus, isFetching: isIpDataFething, refetch: refetchIpQuery } = useQuery(['ipQuery', fetchByIp], () => fetchIp(ip));

  const { data: geocodeData, isFetching: isGeocodeFetching, status: geocodeStatus, isError } = useQuery(['geocodeQuery', ipData?.city?.name], () => fetchGeocode(ipData?.city?.name), {
    enabled: !!ipData?.city?.name
  })

  if (ipStatus === 'loading' || geocodeStatus === 'loading') {
    return <span>Loading...</span>
  }

  if (isError) {
    return <SomeError
      code={ipError.code}
      message={ipError.message}
    />
  }

  if (isIpDataFething) {
    return <span>Refreshing...</span>
  }

  return (
    <div className="App" data-testid='appContainer'>
      <Header ip={ip} setIp={setIp} setFetchByIp={setFetchByIp} refetchIpQuery={refetchIpQuery} />
      <DataPanel ip_geo_data={ipData} geocode_data={{ geocodeData, isGeocodeFetching, geocodeStatus }} />
      <Leaflet ip_geo_data={ipData} />
    </div>
  )
}

export default App
