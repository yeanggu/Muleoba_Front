import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./css/Main.css";
import Main from "./Pages/Main";
import Welcome from "./Pages/Welcome";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}
