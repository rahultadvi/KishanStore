import fertilizer from "../model/Fartilizer.model.js";


/**
 * @desc Add new fertilizer to MongoDB
 * @route POST /api/fertilizers/add
 */
export const addFertilizer = async (req, res) => {
  try {
    const { name, type, price, image, description, stock } = req.body;

    // Validation
    if (!name || !type || !price || !image) {
      return res.status(400).json({ message: "⚠️ All required fields are missing!" });
    }

    // Create a new fertilizer document
    const newFertilizer = new fertilizer({
      name,
      type,
      price,
      image,
      description,
      stock,
    });

    // Save to MongoDB
    await newFertilizer.save();

    res.status(201).json({
      message: "✅ Fertilizer added successfully",
      fertilizer: newFertilizer,
    });
  } catch (err) {
    res.status(500).json({
      message: "❌ Error adding fertilizer",
      error: err.message,
    });
  }
};

/**
 * @desc Get all fertilizers from MongoDB
 * @route GET /api/fertilizers/all
 */
export const getFertilizers = async (req, res) => {
  try {
    const fertilizers = await fertilizer.find();
    res.status(200).json(fertilizers);
  } catch (err) {
    res.status(500).json({
      message: "❌ Error fetching fertilizers",
      error: err.message,
    });
  }
};
