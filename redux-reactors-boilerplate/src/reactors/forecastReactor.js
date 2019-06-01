import {withRPCReactor} from 'fusion-plugin-rpc-redux-react';

export const getForecastReactor = withRPCReactor('getForecast', {
  start: (state, action) => {
    return {
      ...state,
      periods:[],
    }
  },

  success: (state, action) => {
    return {
      ...state,
      periods: action.payload.resp
    }
  },

  failure: (state, action) => {
    return {
      ...state,
      error: `Can't load forecast data`
    }
  },
},);
