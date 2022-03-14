import React from "react";
import { render, screen } from '../../test-utils';
// import { screen, render } from "@testing-library/react";
// import { createStore } from "redux";
// import forecastReduser from '../../store/redusers/forecastReduser.ts';
// import { Provider } from 'react-redux';
// // import store from '../../store/store.ts';
import ForecastWeather from './forecast-weather.tsx';


describe("ForecastWeather", () => {
  it("should display id", () => {
    render(<ForecastWeather />);    
    expect(screen.getByTestId("forecast")).toBeInTheDocument()
  });
});

// jest.mock("./api", () => ({
//   getData: () => ({ list: [] })
// }));

// const initialState = {
// 	forecast: {  list: [] },
// };

// const store = createStore(forecastReduser, initialState);

// const Wrapper = ({ children }) => (
// 	<Provider store={store}>{children}</Provider>
// );

// describe("Forecastweather", () => {
//   it("should display id", async () => {
//     render(<ForecastWeather />, { wrapper: Wrapper });
//     const forecastItem = await screen.findByTestId("forecast");
//     expect(forecastItem).toBeTruthy();
//   });
// });


// describe('Forecast-wether', () => {
//   // eslint-disable-next-line no-undef
//   const defaultProps = { forecast, days };

//   const { getByTestId } = render(<ForecastWeather {...defaultProps} />);

//   it("Should render ForecastWeather", async() => {
//     // eslint-disable-next-line testing-library/prefer-screen-queries
//     expect(getByTestId("forecast")).toBeInTheDocument();
//     expect(screen.getAllByAltText("icon")).toBeInTheDocument();
//     // expect(screen.getByText(/Weather App/i)).toBeInTheDocument();    
//   });
  // });
