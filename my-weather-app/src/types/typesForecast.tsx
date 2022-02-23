export interface IForecast {
  list: [] | null;
}
export interface ForecastState {
  list: IForecast | null;
  isLoaded: boolean;
  error: boolean ;
  city: any;
}
export interface ForecastAction {
  type: string;
  payload?: any;
}

export enum ForecastActionTypes {
  ADD_CITY = "ADD_CITY",
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
  payload?: any;
}

interface FetchForecastSuccess {
  type: ForecastActionTypes.FETCH_FORECAST_SUCCESS;
  payload: IForecast[];
}

interface FetchForecastError {
  type: ForecastActionTypes.FETCH_FORECAST_ERROR;
  payload: boolean;
}

export type FetchForecast =
  | AddCity
  | FetchForecastBegin
  | FetchForecastSuccess
  | FetchForecastError;
