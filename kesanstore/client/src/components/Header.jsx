import React from "react";
import "./Home.css";

function Home() {
  const products = [
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
  ];

  return (
    <div>
      {/* 🌾 Hero Section */}
      <section className="hero-section text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="display-3 fw-bold fade-in">🌾 Welcome to Kisan Store</h1>
          <p className="lead mt-3 fade-in-delay">
            Your trusted partner for seeds, fertilizers & modern farming tools.
          </p>
          <a href="#products" className="btn btn-warning btn-lg mt-4 shadow-lg fade-in-delay2">
            🛒 Shop Now
          </a>
        </div>
      </section>

      {/* 🌱 Highlights Section */}
      <section className="container my-5">
        <h2 className="text-center mb-5 fw-bold">Why Choose Us?</h2>
        <div className="row text-center g-4">
          {[
            {
              img: "https://img.freepik.com/free-photo/wheat-field_1112-1031.jpg",
              title: "🌱 Crops & Seeds",
              desc: "High-quality seeds for better yield and growth.",
              link: "/crops",
            },
            {
              img: "https://img.freepik.com/free-photo/organic-fertilizer_23-2148789574.jpg",
              title: "🌿 Fertilizers",
              desc: "Organic & chemical fertilizers for healthy crops.",
              link: "/fertilizers",
            },
            {
              img: "https://img.freepik.com/free-photo/farming-equipment_23-2148456789.jpg",
              title: "🚜 Farm Equipment",
              desc: "Modern tools & machines to make farming easier.",
              link: "/equipment",
            },
          ].map((item, i) => (
            <div key={i} className="col-md-4 col-sm-6 col-12">
              <div className="highlight-card fade-in">
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid rounded"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "250px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    backgroundColor: "#f9f9f9",
                  }}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/300x200?text=No+Image")
                  }
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <a href={item.link} className="btn btn-outline-success">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Featured Products */}
      <section id="products" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">🌟 Featured Products</h2>
          <div className="row g-4">
            {products.map((product, index) => (
              <div className="col-md-3 col-sm-6 col-12" key={index}>
                <div className="product-card fade-in-delay">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="img-fluid"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "250px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      backgroundColor: "#f9f9f9",
                    }}
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/300x200?text=No+Image")
                    }
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