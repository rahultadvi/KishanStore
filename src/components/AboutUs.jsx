// AboutUs.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <div className="container my-5">
      {/* Hero Section*/} 
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About Kisan Store</h1>
        <p className="lead text-muted">
          Empowering farmers with modern solutions, quality products, and trusted services.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h3 className="fw-bold">Our Mission</h3>
          <p>
            Our mission is to provide farmers with high-quality seeds, fertilizers, 
            and farming equipment that improve productivity and ensure sustainable farming.
          </p>
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold">Our Vision</h3>
          <p>
            To be the most trusted partner for farmers by offering innovative 
            agricultural solutions that transform farming into a profitable and eco-friendly practice.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-5">
        <h2 className="text-center fw-bold mb-4">Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                alt="Founder"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Vikas Vaniya</h5>
                <p className="card-text text-muted">Founder & CEO</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                alt="Manager"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Tanmay Kumar</h5>
                <p className="card-text text-muted">Operations Manager</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                alt="Support"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Amit Verma</h5>
                <p className="card-text text-muted">Customer Support Head</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-center p-4 bg-light rounded">
        <h3 className="fw-bold">Contact Us</h3>
        <p>Email: support@kisanstore.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123 Green Farm Road, Ahmedabad, India</p>
      </div>
    </div>
  );
}

export default AboutUs;
