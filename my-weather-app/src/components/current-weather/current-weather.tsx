import React, { useState, FC } from "react";
import "./current-weather.scss";
import ForecastWeather from "../forecast-weather/forecast-weather";
import { IData } from "../../types/types";

interface CurrentWeatherProps {
  data: IData;
  // getDataForecast: () => {};
  // list: [];
  // showForecast: boolean;
}

const CurrentWeather: FC<CurrentWeatherProps> = ({
  data,
  // getDataForecast,
  // list,
  // showForecast,
  ...props
}) => {
  const [forecastDays, setForecastDays] = useState(Number);

  // console.log(list);
  return (
    <>
      <div className="container">
        <div className="container__main">
          <div className="weather-card">
            <div className="weather-card__title">{data.name}</div>
            <div className="weather-card__description">
              {data.weather[0].description}
            </div>
            <img
              className="weather-card__icon"
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="icon"
            />
            <div className="weather-card__temp">
              <div className="weather-card__temp-value">
                <div className="weather-card__title">{data.main.temp}</div>
              </div>
              <div>
                min.temp {data.main.temp_min} °C / {data.main.temp_max} °C
                max.temp
              </div>
            </div>
          </div>
        </div>
        <div className="container-data">
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Wind</div>
            <div className="container-data__info-row-value">
              {data.wind.speed} m/s
            </div>
          </div>
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Humidity</div>
            <div className="container-data__info-row-value">
              {data.main.humidity} %
            </div>
          </div>
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Pressure</div>
            <div className="container-data__info-row-value">
              {data.main.pressure} mb
            </div>
          </div>
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Clouds</div>
            <div className="container-data__info-row-value">
              {data.clouds.all} %
            </div>
          </div>
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Feels like</div>
            <div className="container-data__info-row-value">
              {data.main.feels_like} °C
            </div>
          </div>
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Visibility</div>
            <div className="container-data__info-row-value">
              {Math.round(data.visibility / 1000)}km
            </div>
          </div>
        </div>
      </div>

      <div className="selection-container">
        <div className="selection-container__row">
          <button
            className="selection-container__row-button"
            onClick={() => {
              // getDataForecast();
              setForecastDays(3);
            }}
          >
            Get 3-days forecast
          </button>
          <button
            className="selection-container__row-button"
            onClick={() => {
              // getDataForecast();
              setForecastDays(5);
            }}
          >
            Get 5-days forecast
          </button>
          <button
            className="selection-container__row-button"
            onClick={() => {
              // getDataForecast();
              setForecastDays(7);
            }}
          >
            Get 7-days forecast
          </button>
        </div>
      </div>
      {/* {showForecast && (
        <ForecastWeather list={list} forecastDays={forecastDays} />
      )} */}
    </>
  );
};

export default CurrentWeather;
