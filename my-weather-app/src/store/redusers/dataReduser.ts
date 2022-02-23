  import {
    MainState,
    MainAction,
    DataActionTypes,    
  } from "../../types/types";

const initialState: MainState = {
  data: null,
  isLoaded: false,
  error: null,
  city: "",
};

export const dataReduser = (
  state = initialState,
  action: MainAction
): MainState => {
  switch (action.type) {
    case DataActionTypes.ADD_CITY:
      return {
        ...state,
        error: null,
        data: null,
        city: action.payload,
      };

    case DataActionTypes.FETCH_DATA_BEGIN:
      return {
        ...state,
        isLoaded: true,
        error: null,
        // data: null,
        // city: action.payload,
      };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        // error: null,
        data: action.payload,
        // city: action.payload,
      };
    case DataActionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: action.payload,
        // data: null,
        // city: null,
      };
    default:
      return state;
  }
};
