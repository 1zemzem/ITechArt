import { MainState, MainAction, DataActionTypes, IData } from "../../types/types";

const initialState: MainState = {
  data: {} as IData,
  isLoaded: false,
  error: false,
  // value: 
};

export const dataReduser = (
  state = initialState,
  action: MainAction
): MainState => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA_BEGIN:
      return {
        isLoaded: true,
        error: false,
        data: null,
      };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        isLoaded: false,
        error: false,
        data: action.payload,
      };
    case DataActionTypes.FETCH_DATA_ERROR:
      return {
        isLoaded: false,
        error: true,
        data: null,
      };
    default:
      return state;
  }
};
