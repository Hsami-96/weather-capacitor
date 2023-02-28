import React, { useEffect, useState } from 'react';
import './App.css';
import {Layout} from './components/layout/Layout'
function App() {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const getLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLat(pos.coords.latitude)
        setLng(pos.coords.longitude)
      })
    }
  }
  useEffect(() => {
    getLocation()
  }, [])
  
  return (
    <>
      {(lat && lng) && (
        <Layout layoutProps={{lat: lat, lng: lng}} />
      )}
    </>
  );
}

export default App;
