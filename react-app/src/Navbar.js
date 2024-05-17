import React from "react";
import { Link } from "react-scroll";
import logo from "./images/reece_logo_light.png";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <div className="contact-info d-flex justify-content-end p-2">
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          <span className="me-4">reagon.wright@reeceelectricaldesign.com</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          <span className="me-2">(651) 308-0116</span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img
            src={logo}
            alt="Reece Electrical Design Logo"
            className="logo-img ms-3"
          />
          <div className="navbar-center">
            <ul className="navbar-nav d-flex justify-content-center">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="home"
                  spy={true}
                  offset={-105}
                  activeClass="active"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="about-me"
                  spy={true}
                  offset={-70}
                  activeClass="active"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="projects"
                  spy={true}
                  offset={-70}
                  activeClass="active"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="contact"
                  spy={true}
                  offset={-70}
                  activeClass="active"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
