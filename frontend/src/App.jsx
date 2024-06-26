import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BunpouTest from "./pages/BunpouTest";
import ChoukaiTest from "./pages/ChoukaiTest";
import DokkaiTest from "./pages/DokkaiTest";
import GoiTest from "./pages/GoiTest";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route>
        <Route exact path="/" component={HomePage} />
        <Route path="/bunpou-test" component={BunpouTest} />
        <Route path="/choukai-test" component={ChoukaiTest} />
        <Route path="/dokkai-test" component={DokkaiTest} />
        <Route path="/goi-test" component={GoiTest} />
      </Route>
    </Routes>
  );
}

export default App;
