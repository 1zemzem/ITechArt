import react from "react";
import "./forecast-weather.scss";

function getCurrentDate(itemDate) {
        
  const date = new Date(itemDate * 1e3);
  const day = date.getDate();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `
  ${day}.${month}.${year}
  `;
}

export default function ForecastWeather({ list, number, ...props }) {
  const forecastList = list.slice(0, number);
  const listItems = forecastList.map((item) => (
    <div className="f-container-forecast__item" key={item.dt}>
      <div className="f-container-forecast__item-date">{getCurrentDate(item.dt)}</div>
      <div className="f-container-forecast__item-description">
        {item.weather[0].description}
      </div>
      <div className="f-container-forecast__item-icon">
      <img
        // className="f-container-forecast__item-icon"
        src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
        alt="icon"
      />
      </div>
      <div className="f-container-forecast__item-row">
        <span>day</span>
        <span>night</span>
      </div>
      <div className="f-container-forecast__item-row">
      <div className="f-container-forecast__item-temp">
        {Math.round(item.temp.day)} °C</div> 
        <div>{Math.round(item.temp.night)} °C</div>
      </div>
    </div>
  ));
  return (
    <div className="f-container">
      <div className="f-container-forecast">{listItems}</div>
    </div>
  );
}
