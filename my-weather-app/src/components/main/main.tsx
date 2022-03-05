import React from "react";
import CurrentWeather from "../current-weather";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner/spinner";
import "./main.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import Input from "../input/input";
import SearchButton from "../search-button/search-button";

const currentData = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

const Main: React.FC = () => {
  const { error, isLoaded, show } = useTypeSelector((state) => state.data);

  return (
    <>
      <div className="card">
        <h1 className="card__title">Weather App</h1>
        <h2 className="card__subtitle">Today is {currentData}</h2>
        <div className="card__search-container">
          <div className="card__search-container-items">
            <Input />
            <SearchButton />
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
