import React from "react";
import "./search-button.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";
import { useDispatch } from "react-redux";

const SearchButton = () => {
  const { city } = useTypeSelector((state) => state.data);
  const { getDataResult } = useActions();
  const dispatch = useDispatch();

  const getData = async () => {
    getDataResult(city);
  };
  return (
    <button
      className="card__search-container-item-button"
      onClick={() => dispatch(getData())}
    >
      Search
    </button>
  );
};

export default SearchButton;
