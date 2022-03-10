import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonRow from "./buttons-row.tsx";


describe("ButtonRow", () => {
  // eslint-disable-next-line no-undef
  const defaultProps = { cityF:"London"};
const getForecastResult = jest.fn();
const getDataForecast = jest.fn();
  const { getByTestId } = render(<ButtonRow {...defaultProps} />);

  it("Should render ButtonRow", async() => {
     
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("button")).toBeInTheDocument();
    expect(screen.getByText(/days forecast/i)).toBeInTheDocument();
  });
});
