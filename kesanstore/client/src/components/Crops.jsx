import React, { useState, useEffect } from "react";
import axios from "axios";

function Crops() {
  const [crops, setCrops] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("globalCart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Fetch crops from MongoDB
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/crops/all");
        setCrops(res.data);
      } catch (err) {
        console.error("❌ Error fetching crops:", err);
        alert("Failed to load crops from server!");
      }
    };
    fetchCrops();
  }, []);

  // ✅ Save cart globally
  useEffect(() => {
    localStorage.setItem("globalCart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
  }, [cart]);

  // ✅ Add to cart and store to DB
  const handleAddToCart = async (crop) => {
    const exist = cart.find((c) => c._id === crop._id);
    if (exist) {
      setCart(cart.map((c) => (c._id === crop._id ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart([...cart, { ...crop, qty: 1 }]);
    }

    try {
      await axios.post("http://localhost:3000/api/crops/add", {
        name: crop.name,
        category: crop.category,
        price: crop.price,
        image: crop.image,
      });
      alert(`✅ ${crop.name} added to cart & saved to database!`);
    } catch (error) {
      console.error("❌ Error saving crop:", error);
    }
  };

  // ✅ Search + Filter
  const filteredCrops = crops.filter((crop) => {
    const matchesSearch = crop.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || crop.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 text-success">🌾 Kisan Store - Crops</h1>

      {/* Search + Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            placeholder="Search crops..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="form-select"
          >
            <option value="All">All</option>
            <option value="Crop">Crops</option>
            <option value="Vegetable">Vegetables</option>
            <option value="Fruit">Fruits</option>
          </select>
        </div>
      </div>

      {/* Crops Grid */}
      <div className="row">
        {filteredCrops.length > 0 ? (
          filteredCrops.map((crop) => (
            <div key={crop._id} className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{crop.name}</h5>
                  <p className="text-muted">{crop.category}</p>
                  <h6 className="text-success fw-bold">₹{crop.price}/kg</h6>
                  <button
                    className="btn btn-success mt-auto w-100"
                    onClick={() => handleAddToCart(crop)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No crops found.</p>
        )}
      </div>
    </div>
  );
}

export default Crops;
