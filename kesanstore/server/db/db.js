
import mongoose from "mongoose";

const mongooseConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/kisanstore", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully to KisanStore");
  } catch (err) {
    console.error("Something went wrong in MongoDB connection:", err.message);
    process.exit(1); 
  }
};

export default mongooseConnection;
