import React from "react";
import FormatDate from "./FormatDate";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3 className="city-name">
        {props.data.city}, {props.data.country}
      </h3>
      <h6 className="date">
        <FormatDate date={props.data.date} />
      </h6>

      <div className="overview">
        <div className="row">
          <div className="col-7">
            <div className="clearfix main-temperature">
              <div className="float-left">
                <Temperature celsius={props.data.temperature} />
              </div>
              <img
                className="float-left"
                src={props.data.imgUrl}
                alt={props.data.description}
              />
            </div>
          </div>
          <div className="col-5">
            <ul>
              <li className="description">{props.data.description}</li>
              <li>
                <strong>
                  <span className="max">{props.data.max}° </span>
                </strong>
                |<span className="min"> {props.data.min}°</span>
              </li>
              <li className="wind">Wind: {props.data.wind} km/h</li>
              <li className="humidity">Humidity: {props.data.humidity}%</li>
            </ul>
          </div>
        </div>
        <br />
        <hr />
      </div>
    </div>
  );
}
