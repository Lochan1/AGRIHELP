/* eslint-disable no-unused-vars */
import React from 'react'
//import { useHistory } from "react-router-dom";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Weathercheck from "./Weathercheck/Weathercheck";
import Paralimain from './Paralimain/Paralimain';
import Airquality from './Paralimain/Airquality';
import Methods from './Paralimain/Methods';
import Steps from './Paralimain/Steps';
import Complaint from './Complaint/Complaint.js';
import Fire from './Fire/Fire.js'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
       <Routes>
       <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Weathercheck" element={<Weathercheck />}></Route>
          <Route exact path="/Paralimain" element={<Paralimain />}></Route>
          <Route exact path="/Airquality" element={<Airquality />}></Route>
          <Route exact path="/Methods" element={<Methods />}></Route>
          <Route exact path="/Steps" element={<Steps />}></Route>
          <Route exact path="/Complaint" element={<Complaint />}></Route>
          <Route exact path="/Fire" element={<Fire />}></Route>
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
