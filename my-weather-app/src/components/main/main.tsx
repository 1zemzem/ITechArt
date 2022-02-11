import React, { useState } from "react";
import CurrentWeather from "../current-weather";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner/spinner";
import { getDataResult, getForecastResult } from "../../services/api-sevice";
import { IData } from "../types";
import "./main.scss";

const currentData = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

const Main = () => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<IData>({} as IData)
  //  ({
  //   name: "",
  //   weather: [0],
  //   main: "",
  //   clouds: "",
  //   wind: "",
  //   visibility: "",
  //   icon: "",
  // });
  const [forecast, setForecast] = useState({
    list: [],
  });
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);
  const [showForecast, setShowForecast] = useState(false);

  const updateValue = async (e:React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const getData = async () => {
    await getDataResult(city)
      .then((data) => {
        console.log(data);
        setIsLoaded(false);
        setData(data);
        setShow(true);
        setShowForecast(false);
        setError(false);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(true);
        setShow(false);
      });
  };

  const getDataForecast = async () => {
    await getForecastResult(city)
      .then((data) => {
        setIsLoaded(false);
        setForecast(data);
        setShowForecast(true);
        setError(false);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(true);
        setShowForecast(false);
      });
  };
  
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

export default Main;
