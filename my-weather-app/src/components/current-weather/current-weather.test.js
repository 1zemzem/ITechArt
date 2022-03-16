import React from "react";
import CurrentWeather from "./current-weather.tsx";
import { render, screen } from '../../test-utils';


// describe("CurrentWeather", () => {
//   it("should display id", () => {
//     render(<CurrentWeather />);    
//     expect(screen.getByTestId("current-weather")).toBeInTheDocument()
//   });
// });

describe('<CurrentWeather/>', () => {
  // let getByText;
  const initialState = {
    data: {
      name: "London"
    }
    
  };
  
    const utils = render(<CurrentWeather />, { initialState });
    
    let getByText = utils.getByText;
  

  it('renders the component', () => {
    expect(screen.getByText('London')).toBeInTheDocument();
  });
});

// describe("CurrentWeather", () => {
//   // eslint-disable-next-line no-undef
//   const defaultProps = { showF, error, isLoaded, data };

//   const { getByTestId } = render(<CurrentWeather {...defaultProps} />);

//   it("Should render CurrentWeather", () => {
//     // eslint-disable-next-line testing-library/prefer-screen-queries
//     expect(getByTestId("current-weather")).toBeInTheDocument();
//     expect(screen.getByText(/description/i)).toBeInTheDocument();
//   });
// });

