import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "phone") {
      const formattedPhoneNumber = formatPhoneNumber(value);
      setFormData({ ...formData, [id]: formattedPhoneNumber });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "This field is required";
    if (!formData.lastName) newErrors.lastName = "This field is required";
    if (!formData.email) {
      newErrors.email = "This field is required";
    } else if (!formData.email.includes('@')) {
      newErrors.email = "Email must contain '@' symbol";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format. Expected format: example@yourdomain.com";
    }
    if (!formData.phone) {
      newErrors.phone = "This field is required";
    } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format. Expected format: (123) 456-7890";
    }
    if (!formData.message) newErrors.message = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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