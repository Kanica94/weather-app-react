import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <strong>
          <span className="main-temp">{props.celsius}</span>
        </strong>
        <span className="units">
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <strong>
          <span className="main-temp">{Math.round(fahrenheit())}</span>
        </strong>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
