import React, { useState, useEffect } from "react";
import axios from "axios";

function Fertilizers() {
  const [fertilizers, setFertilizers] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [addressData, setAddressData] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  // ✅ Fetch fertilizers
  useEffect(() => {
    const fetchFertilizers = async () => {
      try {
        const res = await axios.get("https://kishanstore-backend.onrender.com/api/user/all");
        setFertilizers(res.data);
      } catch (err) {
        console.error("❌ Error fetching fertilizers:", err);
        alert("Failed to load fertilizers from server!");
      }
    };
    fetchFertilizers();
  }, []);

  // ✅ Add item to cart
  const handleAddToCart = (item) => {
    const exist = cart.find((c) => c._id === item._id);
    if (exist) {
      setCart(cart.map((c) => (c._id === item._id ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // ✅ Place order
  const handleOrder = async () => {
    if (!addressData.name || !addressData.phone || !addressData.address || !addressData.pincode) {
      alert("⚠️ Please fill all address details before placing order.");
      return;
    }

    const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    try {
      const res = await axios.post("http://localhost:3000/api/order/place", {
        cart,
        totalPrice,
        addressData,
      });

      alert("✅ Order placed successfully!");
      console.log("Order saved:", res.data);
      setCart([]);
      setShowForm(false);
    } catch (err) {
      console.error("❌ Error placing order:", err);
      alert("Failed to save order!");
    }
  };

  const filtered = fertilizers.filter((f) => {
    const s = f.name.toLowerCase().includes(search.toLowerCase());
    const t = filter === "All" || f.type === filter;
    return s && t;
  });

  return (
    <div className="container py-5">
      <h1 className="text-center text-success mb-4">🌾 Kisan Store - Fertilizers</h1>

      {/* Search + Filter */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search fertilizers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Chemical">Chemical</option>
            <option value="Organic">Organic</option>
          </select>
        </div>
      </div>

      {/* Fertilizer Cards */}
      <div className="row">
        {filtered.map((f) => (
          <div key={f._id} className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={f.image}
                alt={f.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5>{f.name}</h5>
                <p className="text-muted">{f.type}</p>
                <p className="fw-bold text-success">₹{f.price}</p>
                <button className="btn btn-warning mt-auto" onClick={() => handleAddToCart(f)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Place Order Button */}
      {cart.length > 0 && !showForm && (
        <div className="text-center mt-4">
          <button className="btn btn-success px-4 py-2" onClick={() => setShowForm(true)}>
            🛒 Proceed to Checkout ({cart.length})
          </button>
        </div>
      )}

      {/* Address Form */}
      {showForm && (
        <div className="mt-5 border p-4 rounded shadow">
          <h4 className="mb-3">📦 Delivery Details</h4>
          <input
            type="text"
            placeholder="Full Name"
            className="form-control mb-2"
            value={addressData.name}
            onChange={(e) => setAddressData({ ...addressData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="form-control mb-2"
            value={addressData.phone}
            onChange={(e) => setAddressData({ ...addressData, phone: e.target.value })}
          />
          <textarea
            placeholder="Full Address"
            className="form-control mb-2"
            rows="2"
            value={addressData.address}
            onChange={(e) => setAddressData({ ...addressData, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="Pincode"
            className="form-control mb-3"
            value={addressData.pincode}
            onChange={(e) => setAddressData({ ...addressData, pincode: e.target.value })}
          />
          <button className="btn btn-success w-100" onClick={handleOrder}>
            Confirm & Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Fertilizers;
