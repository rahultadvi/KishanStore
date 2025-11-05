// Footer.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Kisan Store</h5>
            <p>Empowering farmers with modern solutions & quality products.</p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/aboutus" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/crops" className="text-light text-decoration-none">Crops</Link></li>
              <li><Link to="/fertilizers" className="text-light text-decoration-none">Fertilizers</Link></li>
              <li><Link to="/equipment" className="text-light text-decoration-none">Equipment</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contact</h5>
            <p>Email: support@kisanstore.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Ahmedabad, India</p>
          </div>
        </div>
        <div className="text-center py-3 border-top">
          <small>© {new Date().getFullYear()} Kisan Store. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
