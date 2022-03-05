import React from "react";
import "./button-row.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";
import { useDispatch } from "react-redux";
import { ForecastActionTypes } from "../../types/typesForecast";

const ButtonRow = () => {
  const { cityF } = useTypeSelector((state) => state.forecast);

  const { getForecastResult } = useActions();
  const dispatch = useDispatch();

  const getDataForecast = (Ndays: number) => {
    dispatch({ type: ForecastActionTypes.ADD_NUMBERS, payload: Ndays });
    getForecastResult(cityF);
  };

  const forecastDays = [3, 5, 7];

  return (
    <div className="selection-container">
      <div className="selection-container__row">
        <button
          className="selection-container__row-button"
          onClick={() => {
            dispatch(getDataForecast(forecastDays[0]));
          }}
        >
          Get {forecastDays[0]}-days forecast
        </button>

        <button
          className="selection-container__row-button"
          onClick={() => {
            dispatch(getDataForecast(forecastDays[1]));
          }}
        >
          Get {forecastDays[1]}-days forecast
        </button>

        <button
          className="selection-container__row-button"
          onClick={() => {
            dispatch(getDataForecast(forecastDays[2]));
          }}
        >
          Get {forecastDays[2]}-days forecast
        </button>
      </div>
    </div>
  );
};

export default ButtonRow;
