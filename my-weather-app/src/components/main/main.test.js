/* eslint-disable no-undef */
// import { render, screen } from "@testing-library/react";
import React from "react";
import { render, screen } from '../../test-utils';
import Main from "./main.tsx";
// import { useTypeSelector } from "../../hooks/useTypeSelector";

describe("Main", () => {
    it("should display id", () => {
      render(<Main />);    
      expect(screen.getByTestId("main")).toBeInTheDocument()
    });
  });

// describe("Main component", () => {
//   const { error, isLoaded, show } = useTypeSelector((state) => state.data);
//   const defaultProps = { error, isLoaded, show };

//   const { getByTestId } = render(<Main {...defaultProps} />);

//   it("Should render Main", async() => {
//     // eslint-disable-next-line testing-library/prefer-screen-queries
//     expect(getByTestId("main")).toBeInTheDocument();
//     expect(screen.getByText(/Weather App/i)).toBeInTheDocument();    
//   });

// });
