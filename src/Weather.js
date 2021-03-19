import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);
  function displayTemperature(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
    });
  }

  function search(city) {
    const apiKey = "0864ac7dec2540b572d96a9d7503af67";
    const unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a City..."
                autoComplete="off"
                autoFocus="on"
                size="35"
                className="enter-city"
                onChange={handleCity}
              />
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search" />
              </button>
              <button type="button" className="btn btn-outline-dark">
                <i className="fas fa-map-marker-alt" />
              </button>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast city={weatherData.city} />
          </div>
        </div>
      </div>
    );
  } else {
    search(city);
    return "Loading weather data...";
  }
}
