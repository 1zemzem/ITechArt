import React from "react";
import "./App.scss";
import Main from "../components/main";

// const apiKey = '58b6f7c78582bffab3936dac99c31b25';
// const getCurrentApiUrl = (city, apiKey) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
// const getWe = async(getCurrentApiUrl) => {
//   const response = await fetch(getCurrentApiUrl(city, apiKey));
//   const data = await response.json();
//   console.log(data);
// }

const App = () => {
  return (
    <div className="app">
      <Main />
    </div>
  );
}

export default App;



