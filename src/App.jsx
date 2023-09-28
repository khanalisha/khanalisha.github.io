import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./component/NavBar";
import Routing from "./component/Routing";

function App() {


  return (
    <>
      <NavBar />
      <Routing />
    </>
  );
}

export default App;
