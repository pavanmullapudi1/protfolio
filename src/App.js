import React, { createContext, useState } from "react";
import AboutMe from "./About";
import "./App.css";
import Experience from "./Experience";
import IntroBlock from "./intro";
import NavBar from "./NavBar";
import Skills from "./Skills";
import VisionMission from "./VisionMission";

const colorContext = createContext("#000");
function App() {
  const [bgColor, setBgColor] = useState("#000");
  return (
    <div className="App pb-2">
      <colorContext.Provider value={bgColor}>
        <NavBar />
        <IntroBlock />
        <VisionMission />
        <AboutMe />
        <Skills />
        <Experience />
      </colorContext.Provider>
    </div>
  );
}

export default App;
