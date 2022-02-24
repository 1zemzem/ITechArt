export interface IForecast {
  list: [];
}
export interface ForecastState {
  data: IForecast;
  isLoaded: boolean;
  error: boolean | null;
  city: any;
  days: number;
}
export interface ForecastAction {
  type: string;
  payload?: any;
}

export enum ForecastActionTypes {
  ADD_CITY = "ADD_CITY",
  ADD_NUMBERS = "ADD_NUMBERS",
  FETCH_FORECAST_BEGIN = "FETCH_FORECAST_BEGIN",
  FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESs ",
  FETCH_FORECAST_ERROR = "FETCH_FORECAST_ERROR",
}

interface AddCity {
  type: ForecastActionTypes.ADD_CITY;
  payload?: string;
}

interface FetchForecastBegin {
  type: ForecastActionTypes.FETCH_FORECAST_BEGIN;
  // payload?: any;
}

interface FetchForecastSuccess {
  type: ForecastActionTypes.FETCH_FORECAST_SUCCESS;
  payload: IForecast[];
}

interface FetchForecastError {
  type: ForecastActionTypes.FETCH_FORECAST_ERROR;
  payload: true;
}

interface AddNumbersOfDays {
  type: ForecastActionTypes.ADD_CITY;
  payload: number;
}

export type FetchForecast =
  | AddCity
  | FetchForecastBegin
  | FetchForecastSuccess
  | FetchForecastError
  | AddNumbersOfDays;
