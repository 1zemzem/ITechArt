import { Dispatch } from "react";
import { DataActionTypes, FetchData } from "../../types/types";
import { FetchForecast, ForecastActionTypes } from "../../types/typesForecast";

const API_KEY: string = "58b6f7c78582bffab3936dac99c31b25";
const getWeatherApiUrl = (city: string, apiKey: string) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const getForecastApiUrl = (city: string, apiKey: string) =>
  `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${apiKey}`;

export const getDataResult = (city: string) => {
  return async (dispatch: Dispatch<FetchData>) => {
    dispatch({ type: DataActionTypes.FETCH_DATA_BEGIN });
    return await fetch(getWeatherApiUrl(city, API_KEY))
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log({ code: data.cod });
        if (data.cod === 200) {
          dispatch({ type: DataActionTypes.FETCH_DATA_SUCCESS, payload: data });
        } else {
          dispatch({
            type: DataActionTypes.FETCH_DATA_ERROR,
            payload: true,
          });
        }
        return data;
      })
      .catch((error) => {
        dispatch({
          type: DataActionTypes.FETCH_DATA_ERROR,
          payload: true,
        });
      });
  };
};

export const getForecastResult = (city: string) => {
  return async (dispatch: Dispatch<FetchForecast>) => {
    dispatch({ type: ForecastActionTypes.FETCH_FORECAST_BEGIN });
    return await fetch(getForecastApiUrl(city, API_KEY))
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log({ code: data.cod });
        if (data.cod === "200") {
          dispatch({
            type: ForecastActionTypes.FETCH_FORECAST_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({
            type: ForecastActionTypes.FETCH_FORECAST_ERROR,
            payload: true,
          });
        }
        return data;
      })
      .catch((error) => {
        dispatch({
          type: ForecastActionTypes.FETCH_FORECAST_ERROR,
          payload: true,
        });
      });
  };
};
