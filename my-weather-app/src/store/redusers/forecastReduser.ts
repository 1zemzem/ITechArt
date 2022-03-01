import {
  ForecastState,
  ForecastAction,
  ForecastActionTypes,
  IForecast,
} from "../../types/typesForecast";

const initialState: ForecastState = {
  forecast: {} as IForecast,
  isLoaded: false,
  error: false,
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
        cityF: action.payload,
      };
    case ForecastActionTypes.FETCH_FORECAST_BEGIN:
      return {
        ...state,
        isLoaded: true,
      };
    case ForecastActionTypes.FETCH_FORECAST_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: action.payload,
      };
    case ForecastActionTypes.FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        error: false,
        forecast: action.payload,
        showF: true,
      };
    case ForecastActionTypes.ADD_NUMBERS:
      return {
        ...state,
        days: action.payload,
      };
    default:
      return state;
  }
};
