import { render, screen } from "@testing-library/react";
import Main from './main.tsx';


describe("Main component", () => {
  it("Main renders", () => {
    render(<Main />);
    // screen.debug();
    // screen.getByText('Enter your city name')
    // const linkElement = screen.getByPlaceholderText(/enter your city name/i);
    expect(screen.getByText(/Weather App/i)).toBeInTheDocument();
    
  });
  
});