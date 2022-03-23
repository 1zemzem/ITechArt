import React from "react";
import { render, screen } from "../../test-utils";
import ButtonRow from "./buttons-row.tsx";

describe("ButtonRow", () => {
  const initialState = {
    forecastData: {
      forecast: {
        list: [
          {
            dt: 1647597600,
            weather: [
              {
                main: "description",
                icon: "01",
              },
            ],
            temp: {
              day: 10,
              night: 3,
            },
          },
          {
            dt: 1647597600,
            weather: [
              {
                main: "description",
                icon: "01",
              },
            ],
            temp: {
              day: 10,
              night: 3,
            },
          },
          {
            dt: 1647597600,
            weather: [
              {
                main: "description",
                icon: "01",
              },
            ],
            temp: {
              day: 10,
              night: 3,
            },
          },
        ],
      },
      isLoaded: false,
      error: false,
      cityF: "London",
      days: 3,
      showF: true,
    },
  };
  it("should display id", () => {
    render(<ButtonRow />, { initialState });
    expect(screen.getByTestId("button-row")).toBeInTheDocument();
  });
});
