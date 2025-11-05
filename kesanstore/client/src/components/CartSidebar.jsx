import React, { useState, useEffect } from "react";

function CartSidebar({ open, onClose }) {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState("cart"); // cart | address | success
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  // ✅ Load saved cart & address
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("globalCart")) || [];
    const savedAddress = JSON.parse(localStorage.getItem("userAddress")) || {
      name: "",
      phone: "",
      address: "",
      pincode: "",
    };
    setCart(savedCart);
    setAddress(savedAddress);
  }, [open]);

  // ✅ Save cart & address to localStorage
  useEffect(() => {
    localStorage.setItem("globalCart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("userAddress", JSON.stringify(address));
  }, [address]);

  // ✅ Quantity Control
  const handleQtyChange = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  // ✅ Remove item
  const handleRemove = (id) => {
    if (window.confirm("❌ Remove this item from your cart?")) {
      setCart((prev) => prev.filter((i) => i.id !== id));
    }
  };

  // ✅ Total
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  // ✅ Handle Order Confirm
  const handleOrder = (e) => {
    e.preventDefault();
    const { name, phone, address: addr, pincode } = address;
    if (!name || !phone || !addr || !pincode) {
      alert("⚠️ Please fill all address fields.");
      return;
    }
    setStep("success");
    setTimeout(() => {
      alert("✅ Order placed successfully!");
      setCart([]);
      localStorage.removeItem("globalCart");
      setStep("cart");
      onClose();
    }, 1500);
  };

  // ✅ Auto Slide Animation
  const sidebarStyle = {
    position: "fixed",
    top: 0,
    right: open ? 0 : "-420px",
    width: "400px",
    height: "100%",
    background: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 20px",
    borderLeft: "3px solid #28a745",
    transition: "right 0.4s ease",
    zIndex: 2000,
    overflowY: "auto",
  };

  return (
    <div style={sidebarStyle}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-light">
        <h5 className="fw-bold text-success m-0">
          {step === "cart"
            ? "🛒 Your Cart"
            : step === "address"
            ? "📦 Delivery Address"
            : "✅ Order Confirmed"}
        </h5>
        <button className="btn btn-sm btn-danger" onClick={onClose}>
          X
        </button>
      </div>

      <div className="p-3">
        {/* 🛍 Step 1: Cart Items */}
        {step === "cart" && (
          <>
            {cart.length === 0 ? (
              <div className="text-center text-muted mt-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                  alt="empty"
                  width="80"
                  className="mb-3"
                />
                <h6>Your cart is empty!</h6>
                <p className="small">Add items to see them here.</p>
              </div>
            ) : (
              <>
                <ul className="list-group mb-3">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <strong>{item.name}</strong>
                        <div className="d-flex align-items-center mt-1">
                          <button
                            className="btn btn-sm btn-outline-secondary me-2"
                            onClick={() => handleQtyChange(item.id, -1)}
                          >
                            −
                          </button>
                          {item.qty}
                          <button
                            className="btn btn-sm btn-outline-secondary ms-2"
                            onClick={() => handleQtyChange(item.id, +1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div>
                        ₹{item.price * item.qty}
                        <button
                          className="btn btn-sm btn-outline-danger ms-2"
                          onClick={() => handleRemove(item.id)}
                        >
                          ✕
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-top pt-2">
                  <h6 className="d-flex justify-content-between">
                    <span>Total Amount:</span> <b>₹{total}</b>
                  </h6>
                  <button
                    className="btn btn-success w-100 mt-3"
                    onClick={() => setStep("address")}
                  >
                    Proceed to Buy →
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {/* 🏠 Step 2: Address Form */}
        {step === "address" && (
          <form onSubmit={handleOrder}>
            <div className="mb-2">
              <label className="form-label fw-bold">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={address.name}
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
                placeholder="e.g. Rahul Sharma"
              />
            </div>

            <div className="mb-2">
              <label className="form-label fw-bold">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                value={address.phone}
                onChange={(e) =>
                  setAddress({ ...address, phone: e.target.value })
                }
                maxLength={10}
                placeholder="10-digit number"
              />
            </div>

            <div className="mb-2">
              <label className="form-label fw-bold">Full Address</label>
              <textarea
                className="form-control"
                rows="3"
                value={address.address}
                onChange={(e) =>
                  setAddress({ ...address, address: e.target.value })
                }
                placeholder="House no., street, city"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Pincode</label>
              <input
                type="text"
                className="form-control"
                value={address.pincode}
                onChange={(e) =>
                  setAddress({ ...address, pincode: e.target.value })
                }
                maxLength={6}
                placeholder="e.g. 394107"
              />
            </div>

            <button type="submit" className="btn btn-success w-100 mb-2">
              Confirm & Pay ₹{total}
            </button>
            <button
              type="button"
              className="btn btn-outline-danger w-100"
              onClick={() => setStep("cart")}
            >
              ← Back to Cart
            </button>
          </form>
        )}

        {/* ✅ Step 3: Success */}
        {step === "success" && (
          <div className="text-center mt-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
              width="90"
              alt="success"
              className="mb-3"
            />
            <h5 className="text-success fw-bold">Order Confirmed!</h5>
            <p className="text-muted">
              Thank you for shopping with <b>Kisan Store 🌾</b>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartSidebar;
