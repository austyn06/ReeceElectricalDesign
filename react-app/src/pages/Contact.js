import React, { useState } from "react";
import "../index.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.email) newErrors.email = true;
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    else if (!/^\d+$/.test(formData.phone))
      newErrors.phone = true;
    if (!formData.inquiryType) newErrors.inquiryType = true;
    if (!formData.message) newErrors.message = true;

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
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="contact-form-container p-5">
        <div className="pb-2">
          <h1>Contact Us</h1>
          <p>Please fill this form in a decent manner.</p>
        </div>
        <hr className="dashed-hr" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="full-name" className="required mb-2">
              Full Name
            </label>
            <div className="d-flex mb-2">
              <input
                type="text"
                className={`form-control me-2 ${
                  errors.firstName ? "error" : ""
                }`}
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                className={`form-control ms-2 ${
                  errors.lastName ? "error" : ""
                }`}
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="required mb-2">
              Email
            </label>
            <input
              type="email"
              className={`form-control mb-2 ${errors.email ? "error" : ""}`}
              id="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="required mb-2">
              Phone
            </label>
            <input
              type="tel"
              className={`form-control mb-2 ${errors.phone ? "error" : ""}`}
              id="phone"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inquiryType" className="required mb-2">
              Nature of Inquiry
            </label>
            <div className="position-relative">
              <select
                className={`form-control mb-2 ${
                  errors.inquiryType ? "error" : ""
                } custom-select`}
                id="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="general">General Inquiry</option>
                <option value="support">Services</option>
                <option value="feedback">Feedback</option>
              </select>
              <div className="dropdown-arrow"></div>
            </div>
          </div>
          <div className="form-group">
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
            ></textarea>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-dark">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
