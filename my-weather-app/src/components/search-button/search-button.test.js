import React from "react";
import { render, screen } from '../../test-utils';
// import { render, screen } from "@testing-library/react";
import SearchButton from './search-button.tsx';
// import "@testing-library/jest-dom";

describe("SearchButton", () => {
    it("should display id", () => {
      render(<SearchButton />);    
      expect(screen.getByTestId("search-button")).toBeInTheDocument()
    });
  });

// describe("Input component", () => {

// it('should render the component onto the screen', () => {
//   render(<SearchButton />);
//   expect(screen.getByTestId('search-button')).toBeInTheDocument();
 
// });

  
// });