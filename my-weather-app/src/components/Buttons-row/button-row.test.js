import React from "react";
import { render, screen } from "../../test-utils";
import ButtonRow from "./buttons-row.tsx";

describe("ButtonRow", () => {
 render(<ButtonRow />);
  it("should display id", () => {
    expect(screen.getByTestId("button-row")).toBeInTheDocument();
  });
});
