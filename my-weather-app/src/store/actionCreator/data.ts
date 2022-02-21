import { Dispatch } from "react";
import { DataActionTypes, FetchData } from "../../components/types";
import { dataReduser } from "../redusers/dataReduser";

const API_KEY: string = "58b6f7c78582bffab3936dac99c31b25";
const getWeatherApiUrl = (city: string, apiKey: string) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const getForecastApiUrl = (city: string, apiKey: string) =>
  `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${apiKey}`;

// const getDataResult = async (city: string) => {
//   return await fetch(getWeatherApiUrl(city, API_KEY))
//     .then((res) => {
//       if (!res.ok) {
//         return Promise.reject(new Error(res.statusText));
//       } else {
//         return res.json();
//       }
//     })
//     .then((data) => {
//       return data;
//     });
// };

// const getForecastResult = async (city: string) => {
//   return await fetch(getForecastApiUrl(city, API_KEY))
// .then((res) => {
//   if (!res.ok) {
//     return Promise.reject(new Error(res.statusText));
//   } else {
//     return res.json();
//   }
// })
// .then((data) => {
//   return data;
// });
// };

export const getDataResult = (city: any) => {
  return async (dispatch: Dispatch<FetchData>) => {
    try {
      dispatch({ type: DataActionTypes.FETCH_DATA_BEGIN });
      const data: any = await fetch(getWeatherApiUrl(city, API_KEY))
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data;
        });
      dispatch({ type: DataActionTypes.FETCH_DATA_SUCCESS, payload: data});
    } catch (e) {
      dispatch({ type: DataActionTypes.FETCH_DATA_ERROR, payload: "Error" });
    }
  };
};
