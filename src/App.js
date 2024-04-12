import "rsuite/dist/rsuite.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Citydata from "./Components/Citydata";
import { DataProvider } from "./context/data.context";
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import WeatherData from "./Components/WeatherData";

function App() {
  const [searchStr, setSearchStr] = useState("");

  return (
    <DataProvider searchStr={searchStr}>
      <HashRouter>
        <div className="body">
          <Navbar searchStr={searchStr} setSearchStr={setSearchStr} />
          <Routes>
            <Route path="/" element={<Citydata />} />
            <Route path="/city/:cityName" element={<WeatherData />} />
          </Routes>
        </div>
      </HashRouter>
    </DataProvider>
  );
}

export default App;
