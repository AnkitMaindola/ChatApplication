import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase to 30 seconds
      socketTimeoutMS: 45000,          // Increase socket timeout
    });
    console.log("Database connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default connectDb;
