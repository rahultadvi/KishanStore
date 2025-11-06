// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaSearch,
  FaUserCircle,
  FaPlusCircle,
  FaTimes,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import CartSidebar from "./CartSidebar";

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const searchItems = [
    { name: "Crops", path: "/crops" },
    { name: "Fertilizers", path: "/fertilizers" },
    { name: "Equipment", path: "/equipment" },
    { name: "Contact", path: "/contact" },
    { name: "About Us", path: "/aboutus" },
    { name: "Add Product", path: "/addProduct" },
  ];

  // ✅ Load cart count
  useEffect(() => {
    const loadCart = () => {
      const savedCart = JSON.parse(localStorage.getItem("globalCart")) || [];
      setCartCount(savedCart.reduce((sum, i) => sum + i.qty, 0));
    };
    loadCart();
    window.addEventListener("storage", loadCart);
    return () => window.removeEventListener("storage", loadCart);
  }, []);

  // ✅ Live search suggestions (auto close menu)
  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
    } else {
      if (menuOpen) setMenuOpen(false);
      const filtered = searchItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [search]);

  // ✅ Auto close search if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
        setMobileSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      navigate(suggestions[0].path);
      setSearch("");
      setSuggestions([]);
      setMobileSearchOpen(false);
    }
  };

  const handleMenuToggle = () => {
    if (!menuOpen) {
      setSuggestions([]);
      setMobileSearchOpen(false);
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* 🌾 Navbar */}
      <nav
        className="shadow-sm sticky-top"
        style={{
          background: "linear-gradient(90deg, #1e3c72, #2a5298)",
          color: "white",
          padding: "10px 0",
          zIndex: 999,
        }}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between px-3">
          {/* ☰ Mobile Menu */}
          <div className="d-lg-none">
            {menuOpen ? (
              <FaTimes
                size={25}
                className="text-white"
                style={{ cursor: "pointer" }}
                onClick={handleMenuToggle}
              />
            ) : (
              <FaBars
                size={25}
                className="text-white"
                style={{ cursor: "pointer" }}
                onClick={handleMenuToggle}
              />
            )}
          </div>

          {/* 🌾 Logo */}
          <Link
            to="/home"
            className="fw-bold text-white text-decoration-none"
            onClick={() => {
              setMenuOpen(false);
              setSuggestions([]);
              setMobileSearchOpen(false);
            }}
            style={{
              fontSize: "1.8rem",
              whiteSpace: "nowrap",
              letterSpacing: "1px",
              textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            🌾 Kisan <span style={{ color: "#FFD700" }}>Store</span>
          </Link>

          {/* 🔍 Desktop Search */}
          <div
            ref={searchRef}
            className="position-relative d-none d-lg-flex align-items-center mx-3 flex-grow-1"
            style={{
              maxWidth: "600px",
              background: "white",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search fertilizers, crops, tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyPress}
              style={{
                boxShadow: "none",
                fontSize: "0.95rem",
                padding: "10px 15px",
              }}
              onFocus={() => setMobileSearchOpen(true)}
            />
            <button
              className="btn text-white"
              style={{
                background: "linear-gradient(90deg, #FFD700, #FFA500)",
                borderRadius: "0 30px 30px 0",
                padding: "10px 20px",
              }}
              onClick={() => {
                if (suggestions.length > 0) {
                  navigate(suggestions[0].path);
                  setSearch("");
                  setSuggestions([]);
                }
              }}
            >
              <FaSearch size={18} />
            </button>

            {/* 🔽 Suggestion Box */}
            {suggestions.length > 0 && (
              <div
                className="position-absolute w-100 bg-white shadow-sm"
                style={{
                  top: "50px",
                  borderRadius: "0 0 10px 10px",
                  zIndex: 999,
                }}
              >
                {suggestions.map((item, i) => (
                  <div
                    key={i}
                    className="p-2 suggestion-item"
                    onClick={() => {
                      navigate(item.path);
                      setSearch("");
                      setSuggestions([]);
                    }}
                    style={{
                      cursor: "pointer",
                      color: "#333",
                      borderBottom:
                        i !== suggestions.length - 1
                          ? "1px solid #eee"
                          : "none",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background = "#f0f0f0")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background = "white")
                    }
                  >
                    <FaSearch className="me-2 text-success" />
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 👤 Icons */}
          <div className="d-flex align-items-center gap-3">
            {/* 🔍 Search icon for Mobile */}
            <button
              className="btn text-white d-lg-none"
              onClick={() => {
                setMobileSearchOpen(!mobileSearchOpen);
                setMenuOpen(false);
              }}
            >
              <FaSearch size={20} />
            </button>

            <Link
              to="/addProduct"
              className="btn btn-sm fw-semibold text-dark d-none d-lg-block"
              onClick={() => {
                setMenuOpen(false);
                setSuggestions([]);
              }}
              style={{
                background: "linear-gradient(90deg, #FFD700, #FFA500)",
                borderRadius: "25px",
                padding: "6px 16px",
                fontSize: "0.9rem",
              }}
            >
              <FaPlusCircle className="me-1" /> Add Product
            </Link>

            <Link
              to="/login"
              className="text-white text-decoration-none d-none d-lg-block fw-semibold"
              style={{ fontSize: "1rem" }}
            >
              <FaUserCircle size={22} className="me-1" /> Account
            </Link>

            {/* 🛒 Cart */}
            <button
              className="btn position-relative text-white"
              onClick={() => {
                setCartOpen(true);
                setMenuOpen(false);
                setMobileSearchOpen(false);
                setSuggestions([]);
              }}
              style={{ background: "transparent", border: "none" }}
            >
              <FaShoppingCart size={24} />
              {cartCount > 0 && (
                <span
                  className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                  style={{
                    borderRadius: "50%",
                    fontSize: "0.75rem",
                    padding: "4px 6px",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Search Section */}
        {mobileSearchOpen && (
          <div
            ref={searchRef}
            className="bg-white text-dark p-3 shadow-sm animate-slide"
          >
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Search crops, fertilizers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyPress}
              autoFocus
            />
            {suggestions.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  navigate(item.path);
                  setSearch("");
                  setSuggestions([]);
                  setMobileSearchOpen(false);
                }}
                className="py-2 px-2 border-bottom"
                style={{ cursor: "pointer" }}
              >
                <FaSearch className="me-2 text-success" />
                {item.name}
              </div>
            ))}
          </div>
        )}

        {/* 📱 Mobile Menu */}
        {menuOpen && (
          <div
            className="d-lg-none bg-dark text-white py-3 px-4"
            style={{
              position: "absolute",
              top: "65px",
              left: 0,
              width: "100%",
              zIndex: 998,
              borderTop: "2px solid #FFD700",
              animation: "slideIn 0.4s ease",
            }}
          >
            {searchItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="d-block py-2 text-white text-decoration-none"
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: "1.1rem" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FFD700")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* 🛒 Sidebar Cart */}
      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* 🌈 Animations */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slide {
          animation: slideIn 0.3s ease;
        }

        .suggestion-item { transition: background 0.2s ease; }

        @media (max-width: 768px) {
          .navbar-brand { font-size: 1.4rem !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;
