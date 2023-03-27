import { useState } from 'react';

import Header from './components/Header';
import Leaflet from "./components/Leaflet";
import DataPanel from "./components/DataPanel";

import './App.scss';
import { useQuery } from 'react-query';
import { fetchUserIp } from './API/geoipify';


const App = () => {
  const [ip, setIp] = useState('');
  const { data, error, isFetching } = useQuery('getUserIp', fetchUserIp); 

  if (isFetching) {
    return <span>Loading...</span>
  }

  return (
    <div className="App" data-testid='appContainer'>
      <Header ip={ip} setIp={setIp} />
      <DataPanel ip_geo_data={data}/>
      <Leaflet ip_geo_data={data} />
    </div>
  )
}

export default App
