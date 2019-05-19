import {createReactor} from 'redux-reactors';

let periods = [{}];

export const getForecastReactor = createReactor('GET_FORECAST', (state, action) => {

  fetch('https://api.weather.gov/gridpoints/MTR/87,118/forecast')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      periods = myJson.properties.periods;
    });

  return {
    ...state,
    periods: periods
  };
});
