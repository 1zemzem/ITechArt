import React from "react";
import { render, screen } from "../../test-utils";
import Main from "./main.tsx";

describe("Main", () => {
  render(<Main />);
  it("should display id", () => {
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});

