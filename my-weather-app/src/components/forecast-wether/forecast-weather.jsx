import react from "react";
import "./forecast-weather.scss";

export default function ForecastWeather(list) {
    console.log(list)

  return (    
    <div className="container">
      <div className="container-forecast">
      <div className="container-forecast__item">
              <div className="container-forecast__item-date">day</div>
              <div className="container-forecast__item-description">description</div>
              <img
                className="container-forecast__item-icon"
                src={`http://openweathermap.org/img/w/.png`}
                alt="icon"
              />
              <div className="container-forecast__item-temp">temp °C / temp °C</div>
            </div>
      </div>
    </div>
  );
  } 
 
  


       
  
