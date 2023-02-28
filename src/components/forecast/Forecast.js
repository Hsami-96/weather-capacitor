import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Forecast.css";
export const Forecast = ({ forecastProps }) => {
  const [weatherIcon, setWeatherIcon] = useState(null)
  const getDisplayIcon = () => {
    axios.get('https://www.weatherapi.com/docs/weather_conditions.json')
    .then((weather_conditions) => {
      const codeMatch = weather_conditions.data.find(x => x.code === forecastProps.current.condition.code)
      if(codeMatch) {
        setWeatherIcon(codeMatch.icon)
      }
    })
  }

  useEffect(() => {
    getDisplayIcon()
  }, []);
  return (
    <>
      {forecastProps && (
        <div className="currentforecastContainer">
          <div className="temperatureContainer">
            <strong className="temperature">
              {forecastProps.current.temp_c} ° |{" "}
            </strong>
          </div>
          <div className="forecastIconContainer">
            <div className="forecastIcon">
              {weatherIcon && (
                <img
                  src={
                    forecastProps.current.is_day === 1
                      ? process.env.PUBLIC_URL + `/day/${weatherIcon}.png` // `../../assets/images/day/${forecastProps.current.condition.code}.png`
                      : process.env.PUBLIC_URL + `/night/${weatherIcon}.png` //`../../assets/images/night/${forecastProps.current.condition.code}.png`
                  }
                  alt={forecastProps.current.condition.text}
                  width={64}
                  height={64}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
