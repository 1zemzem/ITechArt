import {
  ForecastState,
  ForecastAction,
  ForecastActionTypes,
  IForecast,
} from "../../types/typesForecast";

const initialState: ForecastState = {
  forecast: {} as IForecast,
  isLoaded: false,
  error: null,
  cityF: "",
  days: 0,
  showF: false,
};

export const forecastReduser = (
  state = initialState,
  action: ForecastAction
): ForecastState => {
  switch (action.type) {
    case ForecastActionTypes.ADD_CITY_F:
      return {
        ...state,
        error: null,
        // list: null,
        cityF: action.payload,
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
        forecast: action.payload,
        showF: true,
        // city: action.payload,
      };
    case ForecastActionTypes.ADD_NUMBERS:
      return {
        ...state,
        // error: null,
        // list: null,
        // city: action.payload,
        days: action.payload,
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
