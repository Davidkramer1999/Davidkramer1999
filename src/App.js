import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import NavigationBar from "./Components/NavigationBar";
import Projects from "./Components/Projects";

import './i18n.js'
const App = () => {

  return (
    <>
      <NavigationBar></NavigationBar>
      < Routes >
        <Route path="/" element={<AboutMe />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Accommodations" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
