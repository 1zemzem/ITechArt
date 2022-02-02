import React, { useState } from "react";
import CurrentWeather from "../current-weather";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner/spinner";
import "./main.scss";

const currentData = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
const API_KEY = "58b6f7c78582bffab3936dac99c31b25";
const getWeatherApiUrl = (city, apiKey) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const getForecastApiUrl = (city, apiKey) =>
  `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${apiKey}`;

export default function Main() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({
    name: "",
    weather: [0],
    main: "",
    clouds: "",
    wind: "",
    visibility: "",
    icon: "",
  });
  const [forecast, setForecast] = useState({
    list: [],
  });
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);
  const [showForecast, setShowForecast] = useState(false)

  const updateValue = async (e) => {
    setCity(e.target.value);
  };

  const getData = async () => {
    await fetch(getWeatherApiUrl(city, API_KEY))
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(new Error(res.statusText));
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setIsLoaded(false);
        setData(data);
        setShow(true);
        setShowForecast(false);
        setError();
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        setShow(false);
      });
  };

  const getDataForecast = async () => {
    await fetch(getForecastApiUrl(city, API_KEY))
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(new Error(res.statusText));
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setIsLoaded(false);
        setForecast(data);
        setShowForecast(true);
        setError();
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        setShowForecast(false);
      });
  };
  console.log(forecast.list);

  return (
    <>
      <div className="card">
        <h1 className="card__title">Weather App</h1>
        <h2 className="card__subtitle">Today is {currentData}</h2>
        <div className="card__search-container">
          <div className="card__search-container-items">
            <input
              className="card__search-container-item-input"
              placeholder="Enter your city name"
              onChange={updateValue}
              type="text"
              name="text"
              value={city}
            />
            <button
              className="card__search-container-item-button"
              onClick={getData}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {error && <ErrorIndicator />}
      {isLoaded && <Spinner />}
      {show && (
        <CurrentWeather
          main={data.main}
          name={data.name}
          clouds={data.clouds}
          visibility={data.visibility}
          wind={data.wind}
          weather={data.weather[0].description}
          icon={data.weather[0].icon}
          getDataForecast={getDataForecast}
          list={forecast.list}      
          showForecast={showForecast}              
        />
      )}
    </>
  );
}
