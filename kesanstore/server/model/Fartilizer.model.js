import mongoose from "mongoose";

const fertilizerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
       enum: ["Chemical", "Organic", "Granular", "Liquid", "Bio", "Other"], 
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "No description available",
    },
    stock: {
      type: Number,
      default: 50,
      min: 0,
    },
  },
  { timestamps: true }
);

const fertilizer = mongoose.model("fertilizer",fertilizerSchema);

export default fertilizer;
