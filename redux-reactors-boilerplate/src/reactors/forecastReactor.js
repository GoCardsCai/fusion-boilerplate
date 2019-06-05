import {withRPCReactor} from 'fusion-plugin-rpc-redux-react';

export const getForecastReactor = withRPCReactor('getForecast', {
  start: (state, action) => {
    return {
      loading: true,
      periods:[],
    }
  },

  success: (state, action) => {
    return {
      periods: action.payload.periods
    }
  },

  failure: (state, action) => {
    return {
      error: `Can't load forecast data`
    }
  },
},);
