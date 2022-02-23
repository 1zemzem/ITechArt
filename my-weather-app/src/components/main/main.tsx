import React from "react";
import CurrentWeather from "../current-weather";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner/spinner";
// import { getDataResult, getForecastResult } from "../../services/api-sevice";
// import { IData, IForecast } from "../types";
import "./main.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";
import { useDispatch } from "react-redux";
import { DataActionTypes } from "../../types/types";
import { ForecastActionTypes } from "../../types/typesForecast";
// import { getForecastResult } from "../../store/actionCreator/data";

const currentData = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

const Main = () => {
  const { data, error, isLoaded, city } = useTypeSelector(
    (state) => state.data
  );
  console.log(city, data, isLoaded, error);

  const { getDataResult } = useActions();
  const dispatch = useDispatch();

  const updateValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch({ type: DataActionTypes.ADD_CITY, payload: e.target.value });
    dispatch({ type: ForecastActionTypes.ADD_CITY, payload: e.target.value });
    // e.preventDefault();
  };

  const getData = async () => {
    getDataResult(city);
  };
 
  // const getDataForecast = async() => {
  //   getForecastResult(city);
  // }
  // console.log(data);

  return (
    <>
      <div className="card">
        <h1 className="card__title">Weather App</h1>
        <h2 className="card__subtitle">Today is {currentData}</h2>
        <div className="card__search-container">
          <div className="card__search-container-items">
            <input
              className="card__search-container-item-input"
              placeholder="Enter your city name"
              onChange={updateValue}
              type="text"
              name="text"
            />
            <button
              className="card__search-container-item-button"
              onClick={() => dispatch(getData())}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {error && <ErrorIndicator />}
      {isLoaded && <Spinner />}
      {data && (
        <CurrentWeather
        // data={data}
        // getDataForecast={getDataForecast}
        // list={forecast.list}
        // showForecast={showForecast}
        />
      )}
    </>
  );
};

// const Main = () => {
//   const [error, setError] = useState("");
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [data, setData] = useState<IData>({} as IData);
//   const [forecast, setForecast] = useState<IForecast>({} as IForecast);
//   const [city, setCity] = useState("");
//   const [show, setShow] = useState(false);
//   const [showForecast, setShowForecast] = useState(false);

// const updateValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
//   setCity(e.target.value);
// };

// const getData = async () => {
//   await getDataResult(city)
//     .then((data) => {
//       console.log(data);
//       setIsLoaded(false);
//       setData(data);
//       setShow(true);
//       // setShowForecast(false);
//       setError("");
//     })
//     .catch((error) => {
//       setIsLoaded(true);
//       setError(error);
//       setShow(false);
//     });
// };

//   const getDataForecast = async () => {
//     await getForecastResult(city)
//       .then((data) => {
//         setIsLoaded(false);
//         setForecast(data);
//         setShowForecast(true);
//         setError("");
//       })
//       .catch((error) => {
//         setIsLoaded(true);
//         setError(error);
//         setShowForecast(false);
//       });
//   };

//   return (
//     <>

//       {error && <ErrorIndicator />}
//       {isLoaded && <Spinner />}
//       {show && (
//         <CurrentWeather
//           data={data}
//           getDataForecast={getDataForecast}
//           list={forecast.list}
//           showForecast={showForecast}
//         />
//       )}
//     </>
//   );
// };

export default Main;
