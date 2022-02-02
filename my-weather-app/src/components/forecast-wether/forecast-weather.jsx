import react from "react";
import "./forecast-weather.scss";

export default function ForecastWeather(props) {
  const forecasts = props.list;
  const n = props.number;
  const forecastList = (forecasts.slice(0, n));
console.log(n)
  const listItems = forecastList.map((item) => (
    <div className="f-container-forecast__item" key={item.dt}>
      <div className="f-container-forecast__item-date">{item.dt}</div>
      <div className="f-container-forecast__item-description">
        {item.weather[0].description}
      </div>
      <img
        className="f-container-forecast__item-icon"
        src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
        alt="icon"
      />
      <div className="f-container-forecast__item-temp">
        {item.temp.day} °C / {item.temp.night} °C
      </div>
    </div>
  ));
  return (
    <div className="f-container">
      <div className="f-container-forecast">{listItems}</div>
    </div>
  );
}
