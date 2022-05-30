import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import News from "../pages/News";
import NavBar from "../molecules/NavBar";
import React from "react";
import {StockInfo} from "../pages/StockInfo";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<News />}></Route>
          <Route path="/info/:stockId" element={<StockInfo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
