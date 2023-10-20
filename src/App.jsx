import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./component/NavBar";
import { Skill } from "./component/Skill";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Projects } from "./component/Projects";
import Statistics from "./component/common/Statistics";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Statistics />
      <Contact />
    </>
  );
}

export default App;
