
import mongoose from "mongoose";

const mongooseConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://rahul:Rahul420@kishanstore.ueskvcr.mongodb.net/?appName=KishanStore", {
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
