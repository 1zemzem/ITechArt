export interface IForecast {
  list: [];
}
export interface ForecastState {
  forecast: IForecast;
  isLoaded: boolean;
  error: boolean | null;
  cityF: any;
  days: number;
  showF: boolean;
}
export interface ForecastAction {
  type: string;
  payload?: any;
}

export enum ForecastActionTypes {
  ADD_CITY_F = "ADD_CITY_F",
  ADD_NUMBERS = "ADD_NUMBERS",
  FETCH_FORECAST_BEGIN = "FETCH_FORECAST_BEGIN",
  FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESs ",
  FETCH_FORECAST_ERROR = "FETCH_FORECAST_ERROR",
}
interface AddCityF {
  type: ForecastActionTypes.ADD_CITY_F;
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
  type: ForecastActionTypes.ADD_CITY_F;
  payload: number;
}

export type FetchForecast =
  | AddCityF
  | FetchForecastBegin
  | FetchForecastSuccess
  | FetchForecastError
  | AddNumbersOfDays;
