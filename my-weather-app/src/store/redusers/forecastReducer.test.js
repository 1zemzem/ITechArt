import { ForecastActionTypes } from "../../types/typesForecast";
import { forecastReduser, initialState } from "./forecastReduser";

describe("forecastReduser", () => {
  it("ADD_CITY_F", () => {
    const action = { type: ForecastActionTypes.ADD_CITY_F, payload: "London" };

    expect(forecastReduser(initialState, action)).toEqual({
      ...initialState,
      cityF: action.payload,
    });
  });

  it("FETCH_FORECAST_BEGIN", () => {
    const action = {
      type: ForecastActionTypes.FETCH_FORECAST_BEGIN,
      payload: true,
    };

    expect(forecastReduser(initialState, action)).toEqual({
      ...initialState,
      isLoaded: true,
    });
  });

  it("FETCH_FORECAST_ERROR", () => {
    const action = {
      type: ForecastActionTypes.FETCH_FORECAST_ERROR,
      payload: true,
    };

    expect(forecastReduser(initialState, action)).toEqual({
      ...initialState,
      isLoaded: false,
      error: true,
    });
  });

  it("FETCH_FORECAST_SUCCESS", () => {
    const action = {
      type: ForecastActionTypes.FETCH_FORECAST_SUCCESS,
      payload: { list: [] },
    };

    expect(forecastReduser(initialState, action)).toEqual({
      ...initialState,
      isLoaded: false,
      forecast: action.payload,
      showF: true,
      error: false,
    });
  });

  it("ADD_NUMBERS", () => {
    const action = { type: ForecastActionTypes.ADD_NUMBERS, payload: [3, 5, 7] };

    expect(forecastReduser(initialState, action)).toEqual({
      ...initialState,
      days: action.payload,
    });
  });


});
