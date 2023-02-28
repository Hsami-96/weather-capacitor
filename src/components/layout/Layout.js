import { HTTP } from "@awesome-cordova-plugins/http";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Forecast } from "../forecast/Forecast";
import { Location } from "../location/Location";
import "./Layout.css";
const API_KEY = process.env.REACT_APP_API_KEY

export const Layout = ({layoutProps}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('useeffect called')
    setLoading(true);
   
    axios.get('https://api.weatherapi.com/v1/current.json', {
      params: {
        key: API_KEY,
        q: `${layoutProps.lat}, ${layoutProps.lng}`
      },
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then((data) => {
      console.log(data)
      if (data.data) {
        setWeatherData(data.data);
        setLoading(false);
      }
    }).catch((error) => console.log(error));
  }, []);

  return (
    <div className="layoutContainer">
      {loading && !weatherData ? (
        <><p>Loading...</p></>
      ) : (
        <>
          <div className="locationContainer">
            <Location locationProps={weatherData}/>
          </div>
          <div className="forecastContainer">
            <Forecast forecastProps={weatherData} />
          </div>
        </>
      )}
    </div>
  );
};
