import React from "react";
import { render, screen } from '../../test-utils';
// import { render, fireEvent} from "@testing-library/react";
import Input from "./input";

// import "@testing-library/jest-dom";


describe("Input", () => {
    it("should display id", () => {
      render(<Input />);    
      expect(screen.getByTestId("input")).toBeInTheDocument()
    });
  });

// describe("Input component", () => {

// it('should render the component onto the screen', async() => {
//   const { getByDisplayValue } = render(<Input />)
//   // eslint-disable-next-line testing-library/prefer-screen-queries
//   getByDisplayValue('')
//   // expect(screen.getByTestId('input')).toBeInTheDocument();
 
// });


// });
