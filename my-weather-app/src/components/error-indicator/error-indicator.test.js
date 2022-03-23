import { render, screen } from "@testing-library/react";
import ErrorIndicator from "./error-indicator.tsx";

describe("Error component", () => {
  render(<ErrorIndicator />)
  it("Error renders", () => {
    expect(screen.getByTestId("error-indicator")).toBeInTheDocument();
  });
});
