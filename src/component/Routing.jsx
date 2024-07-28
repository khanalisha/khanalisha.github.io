import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skill } from "./Skill";
import { Resume } from "./Resume";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
