// src/components/AddProduct.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddProduct() {
  const [formData, setFormData] = useState({
    farmerName: "",
    contact: "",
    name: "",
    category: "Fertilizer",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  const [preview, setPreview] = useState(null);

  // 🧠 Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "image") setPreview(value);
  };

  // 🚀 Handle Submit (UI only)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Product Uploaded Successfully (UI only)");
    console.log("🧾 Product Info:", formData);

    // Reset Form + Preview
    setFormData({
      farmerName: "",
      contact: "",
      name: "",
      category: "Fertilizer",
      price: "",
      stock: "",
      image: "",
      description: "",
    });
    setPreview(null);
  };

  return (
    <div className="container my-5">
      <div
        className="card shadow-lg border-0"
        style={{ borderRadius: "18px", overflow: "hidden" }}
      >
        {/* 🟩 Gradient Header */}
        <div
          className="card-header text-white text-center py-4"
          style={{
            background: "linear-gradient(90deg, #28a745, #20c997)",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 className="fw-bold mb-0">🌾 Add New Product</h3>
          <small className="text-light">
            Sell your farming products directly to customers!
          </small>
        </div>

        {/* 🧾 Form Section */}
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            {/* Farmer Info */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold text-success">
                  👨‍🌾 Farmer Name
                </label>
                <input
                  type="text"
                  name="farmerName"
                  value={formData.farmerName}
                  onChange={handleChange}
                  className="form-control border-success shadow-sm"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold text-success">
                  📞 Contact Number
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="form-control border-success shadow-sm"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold text-success">
                  🛍️ Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control border-success shadow-sm"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold text-success">
                  📂 Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-select border-success shadow-sm"
                >
                  <option value="Fertilizer">Fertilizer</option>
                  <option value="Seed">Seed</option>
                  <option value="Pesticide">Pesticide</option>
                  <option value="Equipment">Equipment</option>
                </select>
              </div>
            </div>

            {/* Price & Stock */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold text-success">
                  💰 Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="form-control border-success shadow-sm"
                  placeholder="Enter product price"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold text-success">
                  📦 Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  className="form-control border-success shadow-sm"
                  placeholder="Enter available quantity"
                  required
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="mb-3">
              <label className="form-label fw-bold text-success">
                🖼️ Product Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="form-control border-success shadow-sm"
                placeholder="Paste image link here"
                required
              />

              {preview && (
                <div
                  className="text-center mt-3 p-3 border rounded shadow-sm bg-light"
                  style={{
                    border: "2px dashed #28a745",
                    transition: "0.3s ease-in-out",
                  }}
                >
                  <img
                    src={preview}
                    alt="Preview"
                    style={{
                      width: "220px",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <p className="text-muted mt-2">🖼️ Product Preview</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="form-label fw-bold text-success">
                📝 Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-control border-success shadow-sm"
                rows="3"
                placeholder="Write a short product description..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-success w-100 py-3 fs-5 fw-bold"
              style={{
                letterSpacing: "1px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#20c997")}
              onMouseOut={(e) => (e.target.style.background = "#28a745")}
            >
              🚀 Upload Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
