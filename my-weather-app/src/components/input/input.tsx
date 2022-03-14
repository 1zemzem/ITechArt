import React from "react";
import "./input.scss";
import { useDispatch } from "react-redux";
import { DataActionTypes } from "../../types/types";
import { ForecastActionTypes } from "../../types/typesForecast";

const Input = () => {
  const dispatch = useDispatch();

  const updateValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: DataActionTypes.ADD_CITY, payload: e.target.value });
    dispatch({ type: ForecastActionTypes.ADD_CITY_F, payload: e.target.value });
  };

  return (
    <input
      data-testid="input"
      className="card__search-container-item-input"
      placeholder="Enter your city name"
      onChange={updateValue}
      type="text"
      name="text"
    />
  );
};

export default Input;
