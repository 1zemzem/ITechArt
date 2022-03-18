import React from "react";
import { render, screen } from "../../test-utils";
// import { fireEvent } from "@testing-library/react";
import ButtonRow from "./buttons-row.tsx";

describe("ButtonRow", () => {
 render(<ButtonRow />);
  
  it("should display id", () => {
    // render(<ButtonRow />);
    expect(screen.getByTestId("button-row")).toBeInTheDocument();
  });

  // it("handles onClick", () => {
  //   const onClick = jest.fn();
  //   render(<ButtonRow />);
  //   const buttonElement = screen.getAllByText(/days forecast/i);
  //   fireEvent.click(buttonElement);
  //   expect(onClick).toBeCalledTimes(1)
    
  // });

});
