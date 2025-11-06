// Contact.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) formErrors.message = "Message is required";
    return formErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // reset
    }
  };

  return (
    <div className="container my-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Contact Us</h1>
        <p className="lead text-muted">
          We’d love to hear from you! Fill out the form below to reach us.
        </p>
      </div>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title mb-4">Send us a Message</h3>

              {submitted && (
                <div className="alert alert-success">
                  ✅ Your message has been sent successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info + Map */}
        <div className="col-md-6">
          <div className="mb-4">
            <h3 className="fw-bold">Our Office</h3>
            <p>
              <strong>Address:</strong> 123 Green Farm Road, Ahmedabad, India
            </p>
            <p>
              <strong>Email:</strong> support@kisanstore.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
          </div>

          {/* Google Map */}
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.50877920636!2d72.57136281504553!3d23.02250578494581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f1f3b8b6d1%3A0x74f16a4d0d1d88f2!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1632200000000!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
