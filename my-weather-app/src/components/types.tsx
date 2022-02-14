export interface IData {
  cityName: string;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
  weather: IWeather[];
  main: IMain;
}

export interface IMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: number;
  feels_like: number;
};

export interface IWeather {
  description: string;
  icon: string
};

