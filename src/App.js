import React from "react";
import FirstPage from "./Pages/FirstPage";
import Header from "./Components/Header";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/SecondPage" element={<SecondPage />}></Route>
          <Route path="/ThirdPage" element={<ThirdPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
