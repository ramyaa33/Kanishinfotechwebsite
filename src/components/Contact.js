import React, { useState } from "react";
import Footer from "./Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    purpose: "",
    email: "",
    description: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: false });

    try {
      console.log("Form Submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({ loading: false, error: "", success: true });

      setFormData({
        firstName: "",
        lastName: "",
        purpose: "",
        email: "",
        description: "",
      });
    } catch (error) {
      setStatus({ loading: false, error: "Something went wrong.", success: false });
    }
  };

  return (
    <>
      {/* Google Map */}
      <div className="mb-5">
        <iframe
          title="Google Map"
          style={{ width: "100%", height: "400px", border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1910002598515!2d78.14721666940484!3d9.918045046415386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5fae5f2f2ff%3A0x9e01d02d5f71475f!2sKanish%20Infotech!5e0!3m2!1sen!2sin!4v1744127734466!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="containers my-5">
        <h2 className="text-center mb-4">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <select
              name="purpose"
              className="form-control"
              value={formData.purpose}
              onChange={handleChange}
              required
            >
              <option value="">Select Purpose</option>
              <option value="Job Inquiry">Job Inquiry</option>
              <option value="Business">Querys</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              name="description"
              className="form-control"
              rows="4"
              placeholder="Describe your message..."
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="my-3">
            {status.loading && <div className="text-info">Submitting...</div>}
            {status.error && <div className="text-danger">{status.error}</div>}
            {status.success && (
              <div className="text-success">Form submitted successfully!</div>
            )}
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary" disabled={status.loading}>
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
