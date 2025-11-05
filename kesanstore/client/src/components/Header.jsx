import React from "react";
import "./Home.css"; // custom css file


function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="display-3 fw-bold">🌾 Welcome to Kisan Store</h1>
          <p className="lead mt-3">
            Your trusted partner for seeds, fertilizers & modern farming tools.
          </p>
          <a href="#products" className="btn btn-warning btn-lg mt-4 shadow-lg">
            🛒 Shop Now
          </a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container my-5">
        <h2 className="text-center mb-5 fw-bold">Why Choose Us?</h2>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="highlight-card">
              <img
                src="https://img.freepik.com/free-photo/wheat-field_1112-1031.jpg"
                className="card-img-top rounded"
                alt="Crops"
              />
              <div className="card-body">
                <h5 className="card-title">🌱 Crops & Seeds</h5>
                <p className="card-text">
                  High-quality seeds for better yield and growth.
                </p>
                <a href="/crops" className="btn btn-outline-success">
                  Explore
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="highlight-card">
              <img
                src="https://img.freepik.com/free-photo/organic-fertilizer_23-2148789574.jpg"
                className="card-img-top rounded"
                alt="Fertilizers"
              />
              <div className="card-body">
                <h5 className="card-title">🌿 Fertilizers</h5>
                <p className="card-text">
                  Organic & chemical fertilizers for healthy crops.
                </p>
                <a href="/fertilizers" className="btn btn-outline-success">
                  Explore
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="highlight-card">
              <img
                src="https://img.freepik.com/free-photo/farming-equipment_23-2148456789.jpg"
                className="card-img-top rounded"
                alt="Equipment"
              />
              <div className="card-body">
                <h5 className="card-title">🚜 Farm Equipment</h5>
                <p className="card-text">
                  Modern tools & machines to make farming easier.
                </p>
                <a href="/equipment" className="btn btn-outline-success">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">🌟 Featured Products</h2>
          <div className="row g-4">
            {[
              {
                name: "Wheat Seeds",
                price: "₹1200 / 50kg",
                img: "https://img.freepik.com/free-photo/grains-sack_1112-837.jpg",
              },
              {
                name: "Organic Fertilizer",
                price: "₹500 / bag",
                img: "https://img.freepik.com/free-photo/fertilizer-powder_23-2148793324.jpg",
              },
              {
                name: "Tractor Tools",
                price: "₹2500 / set",
                img: "https://img.freepik.com/free-photo/farm-tools_23-2147832290.jpg",
              },
              {
                name: "Irrigation Pump",
                price: "₹7500 / unit",
                img: "https://img.freepik.com/free-photo/irrigation-system_23-2147892321.jpg",
              },
            ].map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="product-card">
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="text-muted">{product.price}</p>
                    <button className="btn btn-warning">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
