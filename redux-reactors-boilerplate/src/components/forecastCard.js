
import React from 'react';

// This is an example of create react componenet by using function.
export const ForecastCard = (props) => {
  const {name, temperature, temperatureUnit, windSpeed, windDirection, icon} = props.period;

  return (
    <div key={name}>
      <img src={icon}></img>
      <li>name: {name}</li>
      <li>temperature: {temperature}</li>
      <li>temperatureUnit: {temperatureUnit}</li>
      <li>windSpeed: {windSpeed}</li>
      <li>windDirection: {windDirection}</li>
    </div>
  );
}
