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
  show: false,
};

export const dataReduser = (
  state = initialState,
  action: MainAction
): MainState => {
  switch (action.type) {
    case DataActionTypes.ADD_CITY:
      return {
        ...state,
        // error: null,
        // data: null,
        city: action.payload,
      };
    case DataActionTypes.FETCH_DATA_BEGIN:
      return {
        ...state,
        isLoaded: true,
        // error: null,
        // data: null,
        // city: action.payload,
      };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        // error: null,
        data: action.payload,
        show: true,
        // city: action.payload,
      };      
    case DataActionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: action.payload,
        show: false
        // data: null,
        // city: null,
      };
    default:
      return state;
  }
};
