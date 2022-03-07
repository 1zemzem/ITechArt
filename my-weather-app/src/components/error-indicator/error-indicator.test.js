import { render, screen } from "@testing-library/react";
import ErrorIndicator from "./error-indicator.tsx";

describe("Error component", () => {
  it("Error renders", () => {
    render(<ErrorIndicator />);
    const linkElement = screen.getByText(/sorry/i);
    expect(linkElement).toBeInTheDocument();
  });
});
