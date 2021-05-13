import React from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import NasaPhoto from "./Components/NasaPhoto";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="nasaphoto" component={NasaPhoto} />
    </div>
  );
}
