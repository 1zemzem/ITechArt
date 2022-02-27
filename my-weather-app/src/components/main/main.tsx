import React from "react";
import CurrentWeather from "../current-weather";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner/spinner";
import "./main.scss";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";
import { useDispatch } from "react-redux";
import { DataActionTypes } from "../../types/types";
import { ForecastActionTypes } from "../../types/typesForecast";

const currentData = new Date().toJSON().slice(0, 10).replace(/-/g, "/");

const Main: React.FC = () => {
  const { error, isLoaded, city, show, data } = useTypeSelector(
    (state) => state.data
  );

  const { getDataResult } = useActions();
  const dispatch = useDispatch();

  const updateValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: DataActionTypes.ADD_CITY, payload: e.target.value });
    dispatch({ type: ForecastActionTypes.ADD_CITY_F, payload: e.target.value });
  };

  // const getData = async () => {
  //   try {
  //     getDataResult(city);
  //   } catch (error) {
  //     dispatch({ type: DataActionTypes.FETCH_DATA_ERROR, payload: true})
  //   }
  // };

  const getData = async () => {
    getDataResult(city);
    console.log(error);
  };
  console.log(error);

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
      {show && <CurrentWeather />}
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
