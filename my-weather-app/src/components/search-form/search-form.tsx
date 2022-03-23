import React from "react";
import "./search-form.scss";
import { useDispatch } from "react-redux";
import { DataActionTypes } from "../../types/types";
import { ForecastActionTypes } from "../../types/typesForecast";
import SearchButton from "../search-button/search-button";

const SearchForm = () => {
  const dispatch = useDispatch();

  const updateValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: DataActionTypes.ADD_CITY, payload: e.target.value });
    dispatch({ type: ForecastActionTypes.ADD_CITY_F, payload: e.target.value });
  };

  return (
    <div className="card__search-container">
      <div className="card__search-container-items">
        <input
          data-testid="input"
          className="card__search-container-item-input"
          placeholder="Enter your city name"
          onChange={updateValue}
          type="text"
          name="text"
        />
        <SearchButton />
      </div>
    </div>
  );
};

export default SearchForm;
