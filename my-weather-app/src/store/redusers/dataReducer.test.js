import { dataReduser, initialState } from "./dataReduser.ts";
import { DataActionTypes } from "../../types/types";

describe("dataReduser", () => {
  it("ADD_CITY", () => {
    const action = { type: DataActionTypes.ADD_CITY, payload: "London" };

    expect(dataReduser(initialState, action)).toEqual({
      ...initialState,
      city: action.payload,
    });
  });

  it("FETCH_DATA_BEGIN", () => {
    const action = { type: DataActionTypes.FETCH_DATA_BEGIN, payload: true };

    expect(dataReduser(initialState, action)).toEqual({
      ...initialState,
      isLoaded: true,
    });
  });

  it("FETCH_DATA_ERROR", () => {
    const action = { type: DataActionTypes.FETCH_DATA_ERROR, payload: true };

    expect(dataReduser(initialState, action)).toEqual({
      ...initialState,
      isLoaded: false,
      error: true,
    });
  });

  it("FETCH_DATA_SUCCESS", () => {
    const action = {
      type: DataActionTypes.FETCH_DATA_SUCCESS,
      payload: {
        name: "London",
        clouds: {
          all: 55,
        },
        wind: {
          speed: 10,
        },
        visibility: 10000,
        weather: [],
        main: {},
      },
    };

    expect(dataReduser(initialState, action)).toEqual({
      ...initialState,
      isLoaded: false,
      data: action.payload,
      show: true,
      error: false,
    });
  });
});
