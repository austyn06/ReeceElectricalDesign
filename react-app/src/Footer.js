import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

export default function Footer() {
  return (
    <footer className="footer p-3">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="me-4">
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          <span>reagon.wright@reeceelectricaldesign.com</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          <span>(651) 308-0116</span>
        </div>
      </div>
      <div className="container-fluid text-center mt-2">
        <span>
          &copy; 2011 Reece Electrical Design, LLC. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
