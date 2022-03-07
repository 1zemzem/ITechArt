import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App component", () => {
  it("App renders", () => {
        render(<App />);        
    
  });

  it("App snapshot", () => {
    const view = render(<App />);
    expect(view).toMatchSnapshot();
  });
});
