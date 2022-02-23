import {
    ForecastState, ForecastAction, ForecastActionTypes
  } from '../../types/typesForecast';

  const initialState: ForecastState = {
    list: null,
    isLoaded: false,
    error: null,
    city: "",
  }

export const forecastReduser = (
    state = initialState,
    action: ForecastAction
  ): ForecastState => {
    switch (action.type) {
      case ForecastActionTypes.ADD_CITY:
        return {
          ...state,
          error: null,
        list: null,
          city: action.payload,
        };
  
      case ForecastActionTypes.FETCH_FORECAST_BEGIN:
        return {
          ...state,
          isLoaded: true,
          error: null,
          // data: null,
          // city: action.payload,
        };
      case ForecastActionTypes.FETCH_FORECAST_SUCCESS:
        return {
          ...state,
          isLoaded: false,
          // error: null,
          list: action.payload,
          // city: action.payload,
        };
      case ForecastActionTypes.FETCH_FORECAST_ERROR:
        return {
          ...state,
          isLoaded: false,
          error: action.payload,
          // data: null,
          // city: null,
        };
      default:
        return state;
    }
  };