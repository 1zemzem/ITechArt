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

  const button = forecastDays.map((item) => {
    
    return (
      <button data-testid="button"
        key={item}
        className="selection-container__row-button"
        onClick={() => {
          dispatch(getDataForecast(item));
        }}
      > 
        Get {item}-days forecast
      </button>
    );
  });

  return (
    <div className="selection-container">
      <div className="selection-container__row">{button}</div>
    </div>
  );
};

export default ButtonRow;
