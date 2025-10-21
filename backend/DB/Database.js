import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = process.env.MONGO_URI; // ✅ must match your .env key name
    if (!db) {
      throw new Error("MongoDB URI is missing in environment variables");
    }

    const { connection } = await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected to ${connection.host}`);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
