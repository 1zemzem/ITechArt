import {
    ForecastState, ForecastAction, IForecast, ForecastActionTypes
  } from '../../types/typesForecast';

  const initialState: ForecastState = {
    list: {} as IForecast ,
    isLoaded: false,
    error: false,
    city: "",
  }

export const forecastReduser = (
    state = initialState,
    action: ForecastAction
  ): ForecastState => {
    switch (action.type) {
      // case ForecastActionTypes.ADD_CITY:
      //   return {
      //     ...state,
      //     city: action.payload,
      //   };
  
      case ForecastActionTypes.FETCH_FORECAST_BEGIN:
        return {
          ...state,
          isLoaded: true,
          // error: false,
          // data: null,
          // city: action.payload,
        };
      case ForecastActionTypes.FETCH_FORECAST_SUCCESS:
        return {
          ...state,
          isLoaded: false,
          error: false,
          list: action.payload,
          // city: action.payload,
        };
      case ForecastActionTypes.FETCH_FORECAST_ERROR:
        return {
          ...state,
          isLoaded: false,
          error: true,
          // data: null,
          // city: null,
        };
      default:
        return state;
    }
  };