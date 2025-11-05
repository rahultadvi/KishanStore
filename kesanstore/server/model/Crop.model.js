import mongoose from "mongoose";

const cropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["Crop", "Vegetable", "Fruit", "Other"],
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
  },
  { timestamps: true }
);

const Crop = mongoose.model("Crop", cropSchema);

export default Crop;
