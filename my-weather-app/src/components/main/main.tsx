import React from "react";
import CurrentWeather from "../current-weather";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner/spinner";
import "./main.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import SearchForm from "../search-form/search-form";

const currentData = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

const Main: React.FC = () => {
  const { error, isLoaded, show } = useTypeSelector((state) => state.weatherData);

  return (
    <>
      <div className="card" data-testid="main">
        <h1 className="card__title">Weather App</h1>
        <h2 className="card__subtitle">Today is {currentData}</h2>
        <SearchForm />
      </div>
      {error && <ErrorIndicator />}
      {isLoaded && <Spinner />}
      {show && !error && <CurrentWeather />}
    </>
  );
};

export default Main;
