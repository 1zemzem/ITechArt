import React from "react";
import CurrentWeather from "./current-weather.tsx";
import { render, screen } from "../../test-utils";

describe("CurrentWeather", () => {
      const { getByTestId } = render(<CurrentWeather />, {
      initialState: {
        data: {
          name: "London",
          clouds: {
            all: 10,
          },
          wind: {
            speed: 20,
          },
          visibility: 30,
          weather: [{ description: "clear", icon: "clear" }],
          main: {
            temp: 10,
            temp_min: 10,
            temp_max: 10,
            humidity: 10,
            pressure: 10,
            feels_like: 10,
          },
          isLoaded: false,
          error: false,
          city: "London",
          show: true,
        },
      },
    })
      it("should display id", () => {
        expect(screen.getByTestId("current-weather")).toBeInTheDocument();
    });

  
});
