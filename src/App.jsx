import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CityComponents from "./Components/CityComponents";
import WeatherComponents from "./Components/WeatherComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <CityComponents /> */}
      <WeatherComponents />
    </div>
  );
}

export default App;
