// src/components/Footer.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-light pt-5 mt-5"
      style={{
        background: "linear-gradient(180deg, #232f3e, #131921)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* 🛒 Brand Section */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold text-warning mb-3">🌾 Kisan Store</h4>
            <p className="small text-light">
              Empowering farmers with modern tools, fertilizers, seeds & equipment — connecting
              agriculture with technology.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a
                href="#"
                className="text-light fs-4"
                style={{ transition: "0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ff9900")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#"
                className="text-light fs-4"
                style={{ transition: "0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ff9900")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="#"
                className="text-light fs-4"
                style={{ transition: "0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#ff9900")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* ⚡ Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-warning mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                ["Home", "/home"],
                ["About Us", "/aboutus"],
                ["Crops", "/crops"],
                ["Fertilizers", "/fertilizers"],
                ["Equipment", "/equipment"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={label} className="mb-2">
                  <Link
                    to={path}
                    className="text-light text-decoration-none"
                    style={{ transition: "0.3s" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ff9900")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 📦 Farmer Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-warning mb-3">Farmer Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/addProduct"
                  className="text-light text-decoration-none"
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ff9900")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                >
                  Upload Your Product
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ff9900")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                >
                  Track Orders
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ff9900")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                >
                  Seller Support
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  onMouseOver={(e) => (e.currentTarget.style.color = "#ff9900")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                >
                  Pricing & Offers
                </a>
              </li>
            </ul>
          </div>

          {/* 📞 Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold text-warning mb-3">Contact Us</h5>
            <p className="mb-1">
              <i className="bi bi-envelope-fill text-warning me-2"></i>
              support@kisanstore.com
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill text-warning me-2"></i> +91 98765 43210
            </p>
            <p className="mb-0">
              <i className="bi bi-geo-alt-fill text-warning me-2"></i> Ahmedabad, India
            </p>
          </div>
        </div>

        {/* 🔸 Footer Bottom */}
        <div
          className="text-center py-3 mt-4"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            fontSize: "0.9rem",
            color: "#ccc",
          }}
        >
          <p className="mb-0">
            © {new Date().getFullYear()} <span className="text-warning">Kisan Store</span> — All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
