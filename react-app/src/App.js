import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ContactPage from "./pages/contact/ContactPage";
import Footer from "./Footer";

export default function App() {
  return (
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
          <ProjectsPage />
        </Element>
        <Element name="contact">
          <ContactPage />
        </Element>
        <Footer />
      </div>
    </Router>
  );
}
