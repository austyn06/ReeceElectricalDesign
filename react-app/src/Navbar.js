import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  // const [showNavbar, setShowNavbar] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY) {
  //       // Scrolling down
  //       setShowNavbar(false);
  //     } else {
  //       // Scrolling up
  //       setShowNavbar(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  return (
    <nav className={"navbar navbar-expand-lg"}>
      <div className="container-fluid">
        <img
          src="/images/reece-logo-light.png"
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
                offset={-70}
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
                activeClass="active"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}