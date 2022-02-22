export interface IForecast {
    list: [];
  }
  
  export enum ForecastActionTypes {
    FETCH_FORECAST_BEGIN = "FETCH_FORECAST_BEGIN",
    FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESs ",
    FETCH_FORECAST_ERROR = "FETCH_FORECAST_ERROR",
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
  
  export type FetchForecast = FetchForecastBegin | FetchForecastSuccess | FetchForecastError;