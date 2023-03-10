import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Error from "./componient/Layout/error";
import About from "./componient/Screens/About/about";
import Contact from "./componient/Screens/Contact Us/contact";
import Home from "./componient/Screens/Home/home";
import OurSkill from "./componient/Screens/Our Skill/ourSkill";
import Portfolio from "./componient/Screens/Portfolio/portfolio";
import Process from "./componient/Screens/Process/process";
import Services from "./componient/Screens/Service/service";
import Layout from "./componient/Layout/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="service" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="ourskill" element={<OurSkill />} />
            <Route path="process" element={<Process />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
