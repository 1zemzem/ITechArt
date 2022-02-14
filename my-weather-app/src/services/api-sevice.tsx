// import React from "react";

const API_KEY: string = "58b6f7c78582bffab3936dac99c31b25";
const getWeatherApiUrl = (city: string, apiKey: string) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const getForecastApiUrl = (city: string, apiKey:string) =>
  `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${apiKey}`;

export const getDataResult = async (city: string) => {
  return await fetch(getWeatherApiUrl(city, API_KEY))
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(new Error(res.statusText));
      } else {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    });
};

export const getForecastResult = async (city: string) => {
  return await fetch(getForecastApiUrl(city, API_KEY))
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(new Error(res.statusText));
      } else {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    });
};
