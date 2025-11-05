import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        fertilizerId: { type: mongoose.Schema.Types.ObjectId, ref: "Fertilizer" },
        name: String,
        qty: Number,
        price: Number,
      },
    ],
    totalAmount: { type: Number, required: true },
    customer: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      pincode: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order",orderSchema);
export default Order;