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
  error: boolean | null;
  city: any;
  show: boolean;
}
export interface MainAction {
  type: string;
  payload?: any;
}

export enum DataActionTypes {
  ADD_SHOW = "ADD_SHOW",
  ADD_CITY = "ADD_CITY",
  FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESs ",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
}

interface AddCity {
  type: DataActionTypes.ADD_CITY;
  payload?: string;
}

interface AddShow {
  type: DataActionTypes.ADD_SHOW;
  payload: true;
}

interface FetchDataBegin {
  type: DataActionTypes.FETCH_DATA_BEGIN;
  // payload?: any;
}

interface FetchDataSuccess {
  type: DataActionTypes.FETCH_DATA_SUCCESS;
  payload: IData;
}

interface FetchDataError {
  type: DataActionTypes.FETCH_DATA_ERROR;
  payload: true;
}

export type FetchData =
  | AddCity
  | FetchDataBegin
  | FetchDataSuccess
  | FetchDataError
  | AddShow