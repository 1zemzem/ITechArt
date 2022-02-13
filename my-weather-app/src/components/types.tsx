export interface IData {
  name: string;
  weather: IWeather[];
  main: IMain;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
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

