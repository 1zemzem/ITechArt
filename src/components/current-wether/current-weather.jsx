import React from "react";
import "./current-weather.scss";

export default function CurrentWeather({
  name,
  weather,
  main,
  clouds,
  wind,
  visibility,
  icon,
  ...props
}) {
  console.log(icon);

  return (
    <>
      <div className="container">
        <div className="container__main">
          <div className="weather-card">
            <div className="weather-card__title">{name}</div>
            <div className="weather-card__description">{weather}</div>
            <img
              className="weather-card__icon"
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt="icon"
            />
            <div className="weather-card__temp">
              <div className="weather-card__temp-value">
                <div className="weather-card__title">{main.temp}</div>
              </div>
              <div>
                min.temp {main.temp_min} °C / {main.temp_max} °C max.temp
              </div>
            </div>
          </div>
        </div>
        <div className="container-data">
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Wind</div>
            <div className="container-data__info-row-value">{wind.speed} m/s</div>
          </div>
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Humidity</div>
            <div className="container-data__info-row-value">
              {main.humidity} %
            </div>
          </div>
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Pressure</div>
            <div className="container-data__info-row-value">
              {main.pressure} mb
            </div>
          </div>
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Clouds</div>
            <div className="container-data__info-row-value">{clouds.all} %</div>
          </div>
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Feels like</div>
            <div className="container-data__info-row-value">
              {main.feels_like} °C
            </div>
          </div>
          <div className="container-data__info-row">
            <div className="container-data__info-row-label">Visibility</div>
            <div className="container-data__info-row-value">
              {Math.round(visibility / 1000)}km
            </div>
          </div>
        </div>
      </div>
      <div className="selection-container">
        <div className="selection-container__row">
          <button className="selection-container__row-button">
            Get 3-days forecast
          </button>
          <button className="selection-container__row-button">
            Get 5-days forecast
          </button>
          <button className="selection-container__row-button">
            Get 7-days forecast
          </button>
        </div>
      </div>
    </>
  );
}
