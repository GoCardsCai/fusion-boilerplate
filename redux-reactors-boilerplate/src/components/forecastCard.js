
import React from 'react';
import {Card, StyledBody, StyledThumbnail} from 'baseui/card';


// This is an example of create react componenet by using function.
export const ForecastCard = (props) => {
  const {name, temperature, temperatureUnit, windSpeed, windDirection, icon} = props.period;

  return (
    <Card
      overrides={{Root: {style: {width: '328px'}}}}
      title={name}
      key={name}
    >
      <StyledThumbnail src={icon}/>
      <StyledBody>
        <li>temperature: {temperature}</li>
        <li>temperatureUnit: {temperatureUnit}</li>
        <li>windSpeed: {windSpeed}</li>
        <li>windDirection: {windDirection}</li>
      </StyledBody>
    </Card>
  );
}
