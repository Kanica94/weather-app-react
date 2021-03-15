import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Footer from "./Footer";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function displayTemperature(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      imgUrl: "https://openweathermap.org/img/wn/02d@2x.png",
      description: response.data.weather[0].description,
      max: Math.round(response.data.main.temp_max),
      min: Math.round(response.data.main.temp_min),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      date: "Wed 24 Feb 11:30",
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="card-body">
            <form>
              <input
                type="text"
                placeholder="Enter a City..."
                autoComplete="off"
                autoFocus="on"
                size="35"
                className="enter-city"
              />
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search" />
              </button>
              <button type="button" className="btn btn-outline-dark">
                <i className="fas fa-map-marker-alt" />
              </button>
            </form>

            <h3 className="city-name">
              {weatherData.city}, {weatherData.country}
            </h3>
            <h6 className="date">{weatherData.date}</h6>

            <div className="overview">
              <div className="row">
                <div className="col-7">
                  <div className="clearfix main-temperature">
                    <div className="float-left">
                      <strong>
                        <span className="main-temp">
                          {weatherData.temperature}
                        </span>
                      </strong>
                      <span className="units">
                        <a href="/" className="celsius-active">
                          °C
                        </a>
                        |
                        <a href="/" className="fahrenheit-link">
                          °F
                        </a>
                      </span>
                    </div>
                    <img
                      className="float-left"
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                    />
                  </div>
                </div>
                <div className="col-5">
                  <ul>
                    <li className="description">{weatherData.description}</li>
                    <li>
                      <strong>
                        <span className="max">{weatherData.max}° </span>
                      </strong>
                      |<span className="min"> {weatherData.min}°</span>
                    </li>
                    <li className="wind">Wind: {weatherData.wind} km/h</li>
                    <li className="humidity">
                      Humidity: {weatherData.humidity}%
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <hr />
              <div className="tableone">
                <div className="row">
                  <div className="col-2">
                    Now <br />
                    <img src={weatherData.imgUrl} width="50px" alt="sun" />
                    <br />
                    <span className="degree">10°</span>
                  </div>
                  <div className="col-2">
                    14:00 <br />
                    <img src={weatherData.imgUrl} width="50px" alt="sun" />
                    <br />
                    <span className="degree">8°</span>
                  </div>
                  <div className="col-2">
                    15:00 <br />
                    <img src={weatherData.imgUrl} width="50px" alt="sun" />
                    <br />
                    <span className="degree">8°</span>
                  </div>
                  <div className="col-2">
                    16:00 <br />
                    <img
                      src={weatherData.imgUrl}
                      width="50px"
                      alt="darkclouds"
                    />
                    <br />
                    <span className="degree">6°</span>
                  </div>
                  <div className="col-2">
                    17:00 <br />
                    <img
                      src={weatherData.imgUrl}
                      width="50px"
                      alt="darkclouds"
                    />
                    <br />
                    <span className="degree">5°</span>
                  </div>
                  <div className="col-2">
                    18:00 <br />
                    <img
                      src={weatherData.imgUrl}
                      width="50px"
                      alt="darkclouds"
                    />
                    <br />
                    <span className="degree">4°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    const apiKey = "0864ac7dec2540b572d96a9d7503af67";
    const unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayTemperature);

    return "Loading weather data...";
  }
}
