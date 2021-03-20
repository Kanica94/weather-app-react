import React, { useState } from "react";
import axios from "axios";
import WeatherForecastData from "./WeatherForecastData";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.list.slice(0, 6).map(function (forecastItem) {
            return (
              <div className="col-2">
                <WeatherForecastData data={forecastItem} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "0864ac7dec2540b572d96a9d7503af67";
    const unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleForecast);

    return "Loading";
  }
}
