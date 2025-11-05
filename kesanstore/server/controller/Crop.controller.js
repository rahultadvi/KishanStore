import Crop from "../model/Crop.model.js";

// ✅ Add new crop
export const addCrop = async (req, res) => {
  try {
    const { name, category, price, image } = req.body;

    if (!name || !category || !price || !image) {
      return res.status(400).json({ message: "⚠️ All fields are required" });
    }

    const newCrop = new Crop({ name, category, price, image });
    await newCrop.save();

    res.status(201).json({ message: "✅ Crop added successfully!", crop: newCrop });
  } catch (err) {
    res.status(500).json({ message: "❌ Error adding crop", error: err.message });
  }
};

// ✅ Get all crops
export const getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (err) {
    res.status(500).json({ message: "❌ Error fetching crops", error: err.message });
  }
};
