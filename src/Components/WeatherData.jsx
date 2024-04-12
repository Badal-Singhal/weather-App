import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function WeatherData() {
  const { cityName } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c23be016da7cc34ef751f9131d15ac69`
        );
        const body = await response.json();
        console.log(body);
        setWeatherData(body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cityName]);
  return (
    <>
      {weatherData && (
        <div className="weather-container">
          <div className="Title">
            <div className="city-name">{cityName}</div>
            <div>{Date(weatherData.dt)}</div>
          </div>
          <div>
            <div>
              <h1 className="heading-temp">{(weatherData.main.temp - 273.15).toFixed(2)}°C</h1>
            </div>
            <div>
              <p className="weather-detail">
                {weatherData.weather[0].main} | Feels like{" "}
                {(weatherData.main.feels_like - 273.15).toFixed(2)}°C | Humidity {weatherData.main.humidity}%
              </p>
              <p className="weather-detail">
                Wind {((weatherData.wind.speed * 18) / 5).toFixed(2)}Km/h{" "}
                {weatherData.wind.deg}° N
              </p>
            </div>
          </div>
          <div>
            <div>
              <h4>Details</h4>
            </div>
            <div>
                <p>Co-ordinates: Lat {weatherData.coord.lat} Lon {weatherData.coord.lon}</p>
                <p>Elevation: {weatherData.main.grnd_level}m</p>
                <p>Pressure: {weatherData.main.pressure} hPa</p>
                <p></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
