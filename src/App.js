import Brightness3Icon from "@mui/icons-material/Brightness3";
import LightModeIcon from "@mui/icons-material/LightMode";
import Switch from "@mui/material/Switch";
import React, { createContext, useState } from "react";
import "./App.css";
import Test from "./Components/Test";

const themeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <React.Fragment>
      <themeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <label htmlFor="theme" id="switch" style={{ margin: "8px" }}>
            {theme === "light" ? <LightModeIcon /> : <Brightness3Icon />}
          </label>
          <Switch onChange={toggleTheme} checked={theme === "light"} />
          <Test />
        </div>
      </themeContext.Provider>
    </React.Fragment>
  );
}
