import React from "react";
import { render, screen } from "../../test-utils";
import SearchForm from "./search-form.tsx";

describe("SearchForm", () => {
  render(<SearchForm />);
  it("should display id", () => {
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });
});
