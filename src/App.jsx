import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CityComponents from "./Components/CityComponents";
import WeatherComponents from "./Components/WeatherComponents";
import axios from "axios";

function App() {
  // const API_key = "b52ebf3479c0ba50f0f006fd016ff13e";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const url1 = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b52ebf3479c0ba50f0f006fd016ff13e&units=metric`;
  // const url2 = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b52ebf3479c0ba50f0f006fd016ff13e&units=metric`;

  const fetchWeather = async (e) => {
    e.preventDefault();
    // axios.get(cond ? url2 : url1);
    try {
      // setLoading(true);
      // const res = await axios(cond ? url2 : url1);
      const res = await axios.get(url1);
      console.log(res);
      // setError("");
    } catch (error) {
      console.log(error);
      // setError(error.response.data.error.slice(0, 23));
    } finally {
      // setLoading(false);
    }
  };
  return (
    <div className="App">
      <CityComponents setCity={setCity} fetchWeather={fetchWeather} />
      {/* <WeatherComponents /> */}
    </div>
  );
}

export default App;
