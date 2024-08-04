import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { handleChange, validateForm } from "./contactHandlers";
import "./contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData, setErrors)) {
      console.log("Form submitted:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    }
  };

  return (
    <div>
      {/* Title */}
      <div className="contact-title d-flex justify-content-start">
        <h1>Contact Us</h1>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        {/* Contact Information */}
        <div className="align-self-start contact-info-container p-5">
          <h1>Reagon Wright, Owner</h1>
          <h2>Contact Information</h2>
          <p className="contact-info-details">
            <FontAwesomeIcon icon={faPhone} className="me-2" /> <span>(651) 308-0116</span>
          </p>
          <p className="contact-info-details">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" /> <span>reagon.wright@reeceelectricaldesign.com</span>
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container p-5">
          <h2>Get in Touch</h2>
          <p>If you have any questions regarding the services we provide, please fill out the form below.</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="full-name" className="required mb-2">
                Full Name
              </label>
              <div className="d-flex justify-content-between">
                <div>
                  <input
                    type="text"
                    className={`form-control mb-2 ${errors.firstName ? "error" : ""}`}
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleChange(e, formData, setFormData)}
                    style={{ fontSize: "1.2rem", padding: "0.5rem" }}
                  />
                  <div className="error-text">{errors.firstName}</div>
                </div>
                <div>
                  <input
                    type="text"
                    className={`form-control mb-2 ${errors.lastName ? "error" : ""}`}
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange(e, formData, setFormData)}
                    style={{ fontSize: "1.2rem", padding: "0.5rem" }}
                  />
                  <div className="error-text">{errors.lastName}</div>
                </div>
              </div>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="email" className="required mb-2">
                Email
              </label>
              <input
                type="email"
                className={`form-control mb-2 ${errors.email ? "error" : ""}`}
                id="email"
                placeholder="example@yourdomain.com"
                value={formData.email}
                onChange={(e) => handleChange(e, formData, setFormData)}
                style={{ fontSize: "1.2rem", padding: "0.5rem" }}
              />
              <div className="error-text">{errors.email}</div>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="phone" className="required mb-2">
                Phone
              </label>
              <input
                type="tel"
                className={`form-control mb-2 ${errors.phone ? "error" : ""}`}
                id="phone"
                placeholder="(123) 456-7890"
                pattern="^(\(\d{3}\) |\d{3}[.-]?|\d{3} )?\d{3}[.-]?\d{4}$"
                value={formData.phone}
                onChange={(e) => handleChange(e, formData, setFormData)}
                style={{ fontSize: "1.2rem", padding: "0.5rem" }}
              />
              <div className="error-text">{errors.phone}</div>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="message" className="required mb-2">
                Message
              </label>
              <textarea
                className={`form-control mb-2 ${errors.message ? "error" : ""}`}
                id="message"
                rows="3"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => handleChange(e, formData, setFormData)}
                style={{ fontSize: "1.2rem", padding: "0.5rem", resize: "none" }}
              ></textarea>
              <div className="error-text">{errors.message}</div>
            </div>
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-dark w-100">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}