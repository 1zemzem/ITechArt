import React from "react";
import { render, screen } from "../../test-utils";
import ForecastWeather from "./forecast-weather.tsx";

describe("ForecastWeather", () => {
  const { getAllByTestId } = render(<ForecastWeather />, {
    initialState: {
      forecast: {
        list: [],
      },
      isLoaded: false,
      error: false,
      cityF: "London",
      days: 3,
      showF: true,
    },
  });
  it("should display id", () => {
    expect(screen.getAllByTestId("forecast")).toBeInTheDocument();
  });
});
