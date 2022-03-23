import React from "react";
import { render, screen } from "../../test-utils";
import SearchButton from "./search-button.tsx";

describe("SearchButton", () => {
  const initialState = {
    weatherData: {
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
      },
      isLoaded: false,
      error: false,
      city: "London",
      show: true,
    },
  };

  it("should display id", () => {
    render(<SearchButton />, { initialState });
    expect(screen.getByTestId("search-button")).toBeInTheDocument();
  });
});
