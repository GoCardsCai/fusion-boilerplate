// export default {
//   getForecast: async ({location}, ctx) => {

//     const period = await fetch('https://api.weather.gov/gridpoints/MTR/87,118/forecast')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(myJson) {
//       console.log(myJson);
//       periods = myJson.properties.periods;
//     });

//     return {greeting: 'hello ${location}', period}
//   }
// }

import { createPlugin } from 'fusion-core';
import {FetchToken} from 'fusion-tokens';

export default createPlugin({
  deps: { fetch: FetchToken},
  provides: (deps) => {
    return {
      getForecast: async ({location}, ctx) => {
        let periods = []
        try {
          const forecastLink = await deps.fetch(`https://api.weather.gov/points/${location}`)
            .then(resp => resp.json())
            .then(json => json.properties.forecast);

          periods = await deps.fetch(forecastLink)
          .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            return myJson.properties.periods;
          })
        }catch(e) {
          console.log (e);
        }
        return {periods}
      }
    }
  },

});