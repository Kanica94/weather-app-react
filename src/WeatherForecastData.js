import React from "react";
import Weather from "./Weather";

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
      <Weather code={props.data.weather[0].icon} />
      <br />
      <span className="degree">{temperature()}</span>
    </div>
  );
}
