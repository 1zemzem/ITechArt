const API_KEY = "58b6f7c78582bffab3936dac99c31b25";
const getWeatherApiUrl = (city, apiKey) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function getWeatherInfo() {
  try {
    const res = await fetch(getWeatherApiUrl());
    const body = await res.json();
    return body;
  } catch (err) {
    console.log(err);
  }
}
getWeatherInfo();
