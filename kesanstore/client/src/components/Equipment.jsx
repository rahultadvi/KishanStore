import React, { useState, useEffect } from "react";

const equipmentData = [
  {
    id: 1,
    name: "Tractor",
    category: "Tractor",
    price: 750000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Tractor_in_field.jpg",
  },
  {
    id: 2,
    name: "Plough",
    category: "Tool",
    price: 15000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Plough_in_field.jpg",
  },
  {
    id: 3,
    name: "Sprinkler System",
    category: "Irrigation",
    price: 12000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/Irrigation_sprinkler_in_field.jpg",
  },
  {
    id: 4,
    name: "Seeder",
    category: "Tool",
    price: 30000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Seeder_machine.jpg",
  },
];

function Equipment() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // ✅ Load global cart from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("globalCart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to globalCart on change
  useEffect(() => {
    localStorage.setItem("globalCart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage")); // Notify Navbar
  }, [cart]);

  // ✅ Add to cart
  const handleAddToCart = (item) => {
    const exist = cart.find((c) => c.id === item.id);
    if (exist) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }

    alert(`✅ ${item.name} added to cart!`);
  };

  // ✅ Filters
  const filteredEquipment = equipmentData.filter((equip) => {
    const matchesSearch = equip.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" || equip.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 text-success">
        🚜 Kisan Store - Equipment
      </h1>

      {/* 🔍 Search & Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            placeholder="Search equipment..."
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
            <option value="Tractor">Tractors</option>
            <option value="Tool">Tools</option>
            <option value="Irrigation">Irrigation</option>
          </select>
        </div>
      </div>

      {/* 🧰 Equipment Cards */}
      <div className="row">
        {filteredEquipment.length > 0 ? (
          filteredEquipment.map((equip) => (
            <div key={equip.id} className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={equip.image}
                  alt={equip.name}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{equip.name}</h5>
                  <p className="text-muted">{equip.category}</p>
                  <h6 className="text-success fw-bold">₹{equip.price}</h6>
                  <button
                    className="btn btn-warning mt-auto w-100"
                    onClick={() => handleAddToCart(equip)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No equipment found.</p>
        )}
      </div>
    </div>
  );
}

export default Equipment;
