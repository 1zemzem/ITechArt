export interface IData {
  name: string;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
  weather: IWeather[];
  main: IMain;
}

export interface IMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: number;
  feels_like: number;
}

export interface IWeather {
  description: string;
  icon: string;
}

export interface IForecast {
  list: [];
}

export enum DataActionTypes {
  FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESs ",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
}

interface FetchDataBegin {
  type: DataActionTypes.FETCH_DATA_BEGIN;
  payload?: any;
}

interface FetchDataSuccess {
  type: DataActionTypes.FETCH_DATA_SUCCESS;
  payload: IData;
}

interface FetchDataError {
  type: DataActionTypes.FETCH_DATA_ERROR;
  payload: boolean;
}

export type FetchData = FetchDataBegin | FetchDataSuccess | FetchDataError;

export interface MainState {
  data: IData | null;
  isLoaded: boolean;
  error: boolean;
}

export interface MainAction {
  type: string;
  payload?: any;
}
