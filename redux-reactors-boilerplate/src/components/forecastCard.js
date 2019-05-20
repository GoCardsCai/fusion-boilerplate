
import React from 'react';
import {Card, StyledBody, StyledThumbnail} from 'baseui/card';

import {styled} from 'fusion-plugin-styletron-react';

const Detailed = styled('div',
  {
    marginTop: '20px',
    textAlign: "justify"
  }
);

// This is an example of create react componenet by using function.
export const ForecastCard = (props) => {
  const {name, temperature, temperatureUnit, windSpeed, windDirection, detailedForecast, icon} = props.period;

  return (
    <Card
      overrides={{Root: {style: {width: '350px', marginTop: '5px'}}}}
      title={name}
    >
      <StyledThumbnail src={icon}/>
      <StyledBody>
        <div><strong>Temperature</strong>: {temperature} {temperatureUnit}</div>
        <div><strong>Wind</strong>: {windSpeed} {windDirection}</div>
        <Detailed>{detailedForecast}</Detailed>
      </StyledBody>
    </Card>
  );
}
