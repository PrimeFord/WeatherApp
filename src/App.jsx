import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CityComponents from "./Components/CityComponents";
import WeatherComponents from "./Components/WeatherComponents";
import axios from "axios";

function App() {
  // const API_key = "b52ebf3479c0ba50f0f006fd016ff13e";
  const [city, setCity] = useState("");
  const [cityy, setCityy] = useState("");
  const [main, setMain] = useState("");
  const [wind, setWind] = useState("");
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState("");
  const [error, setError] = useState("");

  const url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b52ebf3479c0ba50f0f006fd016ff13e&units=metric`;
  // const url2 = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b52ebf3479c0ba50f0f006fd016ff13e&units=metric`;

  //fetch
  const fetchWeather = async (e) => {
    e.preventDefault();
    if (city.trim().length !== 0) {
      setEmpty("");
    } else {
      setEmpty("Please enter a city name in this field");
      console.log("empty");
    }
    // axios.get(cond ? url2 : url1);
    try {
      // setLoading(true);
      // const res = await axios(cond ? url2 : url1);
      const res = await axios.get(url1);
      setCityy(res.data.city);
      setMain(res.data.list[0].main);
      console.log(res.data.list[0].main);
      setWind(res.data.list[0].wind.speed);
      setWeather(res.data);
      console.log(res);
      // setError("");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      setLoading(true);
      setCity("");
    }
  };
  // useEffect(() => {
  //   if (city.length) {
  //     fetchData();
  //   }
  // }, [city]);
  return (
    <div className="App">
      {weather ? (
        <WeatherComponents
          setCity={setCity}
          fetchWeather={fetchWeather}
          cityy={cityy}
          main={main}
          wind={wind}
          weather={weather}
        />
      ) : (
        <CityComponents
          setCity={setCity}
          city={city}
          empty={empty}
          error={error}
          fetchWeather={fetchWeather}
        />
      )}
    </div>
  );
}

export default App;
