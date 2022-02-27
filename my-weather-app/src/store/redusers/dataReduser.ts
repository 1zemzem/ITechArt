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
        city: action.payload,
      };
    case DataActionTypes.FETCH_DATA_BEGIN:
      return {
        ...state,
        isLoaded: true,        
      };
      case DataActionTypes.FETCH_DATA_ERROR:
        return {
          ...state,          
          isLoaded: false,
          error: action.payload,         
        };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        data: action.payload,
        show: true,   
        error: false,     
      };      
    
    default:
      return state;
  }
};
