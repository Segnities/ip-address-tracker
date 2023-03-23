import {useEffect, useState} from 'react'

import axios from "axios";

import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

import './App.scss';



function App() {
  const [count, setCount] = useState(0)

  const url = import.meta.env.VITE_SOME_KEY

  useEffect(()=> {
    //axios.get(url).then(res => console.log(res.data)).catch(err => console.log('some error '));
  }, [])

  return (
    <div className="App">
    <h1 data-testid='header-1'>Vite App :)</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
