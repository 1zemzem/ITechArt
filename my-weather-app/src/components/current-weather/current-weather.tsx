import React from "react";
import "./current-weather.scss";
import ForecastWeather from "../forecast-weather/forecast-weather";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ButtonRow from "../Buttons-row/buttons-row";

const CurrentWeather = () => {
  const { data } = useTypeSelector((state) => state.data);

  const { showF, error, isLoaded } = useTypeSelector((state) => state.forecast);

  return (
    <>
      <div className="container" id="current-weather">
        <div className="container__main">
          <div className="weather-card">
            <div className="weather-card__title" >{data.name}</div>
            <div className="weather-card__description">
              {data.weather[0].description}
              description
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
      <ButtonRow />
      {error && <ErrorIndicator />}
      {isLoaded && <Spinner />}
      {showF && <ForecastWeather />}
    </>
  );
};

export default CurrentWeather;
