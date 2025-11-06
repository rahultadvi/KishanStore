// import React from "react";

// function Card({ item, onAddToCart, onBuyNow }) {
//   return (
//     <div className="card h-100 shadow-sm">
//       <img
//         src={item.image}
//         alt={item.name}
//         className="card-img-top"
//         style={{ height: "200px", objectFit: "cover" }}
//       />
//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title">{item.name}</h5>
//         <p className="text-muted">{item.category}</p>
//         <p className="fw-bold text-success">₹{item.price}</p>
//         <div className="mt-auto d-grid gap-2">
//           <button
//             className="btn btn-warning"
//             onClick={() => onAddToCart(item)}
//           >
//             Add to Cart
//           </button>
//           <button
//             className="btn btn-success"
//             onClick={() => onBuyNow(item)}
//           >
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
