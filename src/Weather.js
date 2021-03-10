import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";

export default function Weather() {
  let weatherData = {
    city: "London, GB",
    date: "Wed 24 Feb, 11:30",
    temperature: 17,
    imgUrl: "https://openweathermap.org/img/wn/02d@2x.png",
    description: "Broken clouds",
    max: 17,
    min: 14,
    humidity: 72,
    wind: 13,
  };
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

          <h3 className="city-name">{weatherData.city}</h3>
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
                  <img className="float-left" src={weatherData.imgUrl} alt="" />
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
                  10°
                </div>
                <div className="col-2">
                  14:00 <br />
                  <img src={weatherData.imgUrl} width="50px" alt="sun" />
                  <br />
                  8°
                </div>
                <div className="col-2">
                  15:00 <br />
                  <img src={weatherData.imgUrl} width="50px" alt="sun" />
                  <br />
                  8°
                </div>
                <div className="col-2">
                  16:00 <br />
                  <img src={weatherData.imgUrl} width="50px" alt="darkclouds" />
                  <br />
                  6°
                </div>
                <div className="col-2">
                  17:00 <br />
                  <img src={weatherData.imgUrl} width="50px" alt="darkclouds" />
                  <br />
                  5°
                </div>
                <div className="col-2">
                  18:00 <br />
                  <img src={weatherData.imgUrl} width="50px" alt="darkclouds" />
                  <br />
                  4°
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
