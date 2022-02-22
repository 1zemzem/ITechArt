  import {
    MainState,
    MainAction,
    DataActionTypes,
    IData,
  } from "../../types/types";

const initialState: MainState = {
  data: {} as IData,
  isLoaded: false,
  error: false,
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
        city: action.payload,
      };

    case DataActionTypes.FETCH_DATA_BEGIN:
      return {
        ...state,
        isLoaded: true,
        // error: false,
        // data: null,
        // city: action.payload,
      };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        error: false,
        data: action.payload,
        // city: action.payload,
      };
    case DataActionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: true,
        // data: null,
        // city: null,
      };
    default:
      return state;
  }
};
