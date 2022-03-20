import React from "react";
import { render, screen } from "../../test-utils";
import ForecastWeather from "./forecast-weather.tsx";

describe("ForecastWeather", () => {
  it("should display id", () => {
    const initialState = {
      forecast: {
        forecast: {
          list: [
            {
              dt: 1647597600,
              weather: [
                {
                  main: "description",
                  icon: "01",
                },
              ],
              temp: {
                day: 10,
                night: 3,
              },
            },
            {
              dt: 1647597600,
              weather: [
                {
                  main: "description",
                  icon: "01",
                },
              ],
              temp: {
                day: 10,
                night: 3,
              },
            },
            {
              dt: 1647597600,
              weather: [
                {
                  main: "description",
                  icon: "01",
                },
              ],
              temp: {
                day: 10,
                night: 3,
              },
            },
            {
              dt: 1647597600,
              weather: [
                {
                  main: "description",
                  icon: "01",
                },
              ],
              temp: {
                day: 10,
                night: 3,
              },
            },
          ],
        },
        isLoaded: false,
        error: false,
        cityF: "London",
        days: 3,
        showF: true,
      },
    };

    render(<ForecastWeather />, { initialState });
    const linkElement = screen.getAllByTestId("forecast");
    expect(linkElement.length).toEqual(3);
  });
});
