import React from "react";
import CurrentWeather from "../current-weather";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner/spinner";
import "./main.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";
import { useDispatch } from "react-redux";
import { DataActionTypes } from "../../types/types";
import { ForecastActionTypes } from "../../types/typesForecast";

const currentData = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

const Main: React.FC = () => {
  const { error, isLoaded, city, show, data } = useTypeSelector(
    (state) => state.data
  );

  const { getDataResult } = useActions();
  const dispatch = useDispatch();

  const updateValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: DataActionTypes.ADD_CITY, payload: e.target.value });
    dispatch({ type: ForecastActionTypes.ADD_CITY_F, payload: e.target.value });
  };

  const getData = async () => {
    getDataResult(city);
  };
  console.log(error, isLoaded, city, show, data);

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
            />
            <button
              className="card__search-container-item-button"
              onClick={() => dispatch(getData())}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {error && <ErrorIndicator />}
      {isLoaded && <Spinner />}
      {show && !error && <CurrentWeather />}
    </>
  );
};

export default Main;
