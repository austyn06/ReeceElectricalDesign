import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Element name="home">
            <Home />
          </Element>
          <Element name="about-me">
            <About />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
          <Footer />
        </div>
      </Router>
    </>
  );
}
