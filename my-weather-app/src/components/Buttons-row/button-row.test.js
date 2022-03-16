import React from "react";
import { render, screen } from '../../test-utils';
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import ButtonRow from "./buttons-row.tsx";

describe("ButtonRow", () => {
  const initialState = {
    cityF: {
      name: "London"
    }
    
  };
  
    const utils = render(<ButtonRow />, { initialState });
    
    let getByText = utils.getByText;
    it("should display id", () => {

      render(<ButtonRow />);    
      expect(screen.getByTestId("button")).toBeInTheDocument()
    });
  });
// describe("ButtonRow", () => {
//   // eslint-disable-next-line no-undef
//   const defaultProps = { cityF:"London"};
// const getForecastResult = jest.fn();
// const getDataForecast = jest.fn();
//   const { getByTestId } = render(<ButtonRow {...defaultProps} />);

//   it("Should render ButtonRow", async() => {
     
//     // eslint-disable-next-line testing-library/prefer-screen-queries
//     expect(getByTestId("button")).toBeInTheDocument();
//     expect(screen.getByText(/days forecast/i)).toBeInTheDocument();
//   });
// });
