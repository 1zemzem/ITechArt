import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./input";
import "@testing-library/jest-dom";

describe("Input component", () => {

  // eslint-disable-next-line no-undef
  const defaultProps = { updateValue};

  const { getByTestId } = render(<Input {...defaultProps} />);

  it("Should render Input", async() => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("input")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();   
  });
  
});
