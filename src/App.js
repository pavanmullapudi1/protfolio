/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import AboutMe from "./About";
import "./App.scss";
import Experience from "./Experience";
import IntroBlock from "./intro";
import NavBar from "./NavBar";
import Skills from "./Skills";
import VisionMission from "./VisionMission";
import Socials from "./socials";

const colorContext = createContext("#000");
function App() {
  const [bgColor, setBgColor] = useState("#000");
  return (
    <div className="App pb-2 cursorEvent">
      <colorContext.Provider value={bgColor}>
        <NavBar />
        <IntroBlock />
        <VisionMission />
        <AboutMe />
        <Skills />
        <Experience />
        <Socials />
      </colorContext.Provider>
    </div>
  );
}

export default App;
