import React from "react";
import "./WeatherForecastData.css";

export default function WeatherForecastData(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className="WeatherForecastData">
      {hours()} <br />
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt={props.data.description}
      />
      <br />
      <span className="degree">{temperature()}</span>
    </div>
  );
}
