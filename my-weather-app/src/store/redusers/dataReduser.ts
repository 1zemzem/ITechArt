import { MainState, MainAction, DataActionTypes } from "../../components/types";

const initialState: MainState = {
  data: {},
  isLoaded: false,
  error: null,
};

export const dataReduser = (
  state = initialState,
  action: MainAction
): MainState => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA_BEGIN:
      return {
        isLoaded: true,
        error: null,
        data: {},
      };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        isLoaded: false,
        error: null,
        data: action.payload,
      };
    case DataActionTypes.FETCH_DATA_ERROR:
      return {
        isLoaded: false,
        error: action.payload,
        data: {},
      };
    default:
      return state;
  }
};
