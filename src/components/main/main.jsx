import React, { useState } from "react";
import CurrentWeather from "../current-wether/current-weather";
import "./main.scss";

const currentData = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
const API_KEY = "58b6f7c78582bffab3936dac99c31b25";
const getWeatherApiUrl = (city, apiKey) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const getForecastApiUrl = () =>
  // eslint-disable-next-line no-undef
  `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${apiKey}`;

export default function Main() {
  const [error, setError] = useState(null);
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
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);
  
  const updateValue = async (e) => {
    setCity(e.target.value);
  };

  const getData = async () => {
    await fetch(getWeatherApiUrl(city, API_KEY))
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setData(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .then(setShow(true));
      

    // if (error) {
    //   return <div>Ошибка: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Загрузка...</div>;
    // }
    
  };

  return (
    <>
      <div className="card">
        <h1 className="card__title">Weather App</h1>
        <h2 className="card__subtitle">Today is {currentData}</h2>
        <div className="card__search-container">
          <div className="card__search-container-items" >
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
      {show && (
        <CurrentWeather
          main={data.main}
          name={data.name}
          clouds={data.clouds}
          visibility={data.visibility}
          wind={data.wind}
          weather={data.weather[0].description}
          icon={data.weather[0].icon}
        />
      )}
    </>
  );
}
