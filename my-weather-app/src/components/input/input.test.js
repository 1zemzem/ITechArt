import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./input";
import '@testing-library/jest-dom';

describe("Input component", () => {
  
  it("Input renders", () => {
    render(<Input />);    
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText(/enter your city name/i)).toBeInTheDocument();
  });

});
