import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CurrentWeather from "./current-weather.tsx";

describe("CurrentWeather", () => {
  // eslint-disable-next-line no-undef
  const defaultProps = { showF, error, isLoaded, data };

  const { getByTestId } = render(<CurrentWeather {...defaultProps} />);

  it("Should render CurrentWeather", () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("current-weather")).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });
});

