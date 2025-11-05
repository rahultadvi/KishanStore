// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CartSidebar from "./CartSidebar";

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // ✅ Load item count from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("globalCart")) || [];
    setCartCount(savedCart.reduce((sum, item) => sum + item.qty, 0));

    // Listen for cart updates
    window.addEventListener("storage", () => {
      const updatedCart = JSON.parse(localStorage.getItem("globalCart")) || [];
      setCartCount(updatedCart.reduce((sum, item) => sum + item.qty, 0));
    });
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top shadow-sm"
        style={{
          background: "linear-gradient(90deg, #2e8b57, #28a745)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container">
          {/* 🌾 Brand */}
          <Link
            className="navbar-brand fw-bold text-white"
            to="/home"
            style={{
              fontSize: "1.6rem",
              letterSpacing: "1px",
              textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
            }}
          >
            🌾 Kisan Store
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold mx-2" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold mx-2" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold mx-2" to="/crops">
                  Crops
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold mx-2" to="/fertilizers">
                  Fertilizers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold mx-2" to="/equipment">
                  Equipment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold mx-2" to="/contact">
                  Contact
                </Link>
              </li>

              {/* 🌿 Add Product Button */}
              <li className="nav-item mx-2">
                <Link
                  to="/addProduct"
                  className="btn btn-light fw-bold"
                  style={{
                    background: "linear-gradient(90deg, #f8f9fa, #d4edda)",
                    color: "#2e8b57",
                    borderRadius: "25px",
                    padding: "8px 20px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "linear-gradient(90deg, #c3f8c3, #aef1ae)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "linear-gradient(90deg, #f8f9fa, #d4edda)")
                  }
                >
                  ➕ Add Product
                </Link>
              </li>

              {/* 🛒 Cart Button */}
              <li className="nav-item ms-3">
                <button
                  className="btn btn-warning position-relative fw-semibold"
                  style={{
                    borderRadius: "25px",
                    padding: "8px 20px",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#ffb703")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "#ffc107")
                  }
                  onClick={() => setCartOpen(true)}
                >
                  🛒 Cart
                  {cartCount > 0 && (
                    <span
                      className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {cartCount}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar Cart */}
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Navbar;
