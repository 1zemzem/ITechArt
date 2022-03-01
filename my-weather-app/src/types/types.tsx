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
export interface MainState {
  data: IData;
  isLoaded: boolean;
  error: boolean;
  city: any;
  show: boolean;
}
export interface MainAction {
  type: string;
  payload?: any;
}

export enum DataActionTypes {
  ADD_CITY = "ADD_CITY",
  FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
}

interface AddCity {
  type: DataActionTypes.ADD_CITY;
  payload?: string;
}
interface FetchDataBegin {
  type: DataActionTypes.FETCH_DATA_BEGIN;
}
interface FetchDataSuccess {
  type: DataActionTypes.FETCH_DATA_SUCCESS;
  payload: IData;
}
interface FetchDataError {
  type: DataActionTypes.FETCH_DATA_ERROR;
  payload: boolean;
}

export type FetchData =
  | AddCity
  | FetchDataBegin
  | FetchDataSuccess
  | FetchDataError;
