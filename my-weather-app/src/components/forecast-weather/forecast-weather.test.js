import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ForecastWeather from './forecast-weather.tsx';

describe('Forecast-wether', () => {
  // eslint-disable-next-line no-undef
  const defaultProps = { forecast, days };

  const { getByTestId } = render(<ForecastWeather {...defaultProps} />);

  it("Should render ForecastWeather", async() => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("forecast")).toBeInTheDocument();
    expect(screen.getAllByAltText("icon")).toBeInTheDocument();
    // expect(screen.getByText(/Weather App/i)).toBeInTheDocument();    
  });
  });
