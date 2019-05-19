import {createReactor} from 'redux-reactors';
export const forecastReactor = createReactor('GET_FORECAST', (state, action) => {
  return {
    ...state,
    periods:[{number: 1,
      name: "Today",
      startTime: "2019-05-19T11:00:00-07:00",
      endTime: "2019-05-19T18:00:00-07:00",
      isDaytime: true,
      temperature: 58,
      temperatureUnit: "F",
      temperatureTrend: "falling",
      windSpeed: "9 to 14 mph",
      windDirection: "WSW",
      icon: "https://api.weather.gov/icons/land/day/tsra_hi,20/tsra_hi,70?size=medium",
      shortForecast: "Slight Chance Showers And Thunderstorms",
      detailedForecast: "A slight chance of showers and thunderstorms before 3pm, then showers and thunderstorms likely between 3pm and 4pm, then a slight chance of showers and thunderstorms between 4pm and 5pm, then a chance of rain. Partly sunny. High near 58, with temperatures falling to around 56 in the afternoon. West southwest wind 9 to 14 mph, with gusts as high as 20 mph. Chance of precipitation is 70%. New rainfall amounts less than a tenth of an inch possible."}],
  };
});
