import { useState } from 'react';

import Header from './components/Header';
import Leaflet from "./components/Leaflet";


import './App.scss';


function App() {
  const [ip, setIp] = useState('');

  return (
    <div className="App">
      <Header ip={ip} setIp={setIp} />
      <Leaflet/>
    </div>
  )
}

export default App
