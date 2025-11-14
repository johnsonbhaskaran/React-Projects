import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB connection established successfully.");
    console.log(`☑️  MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("⚠️ Error establishing connection: ", err.message);
    process.exit(1); // process code 1 means exit with failure, 0 means success
  }
};
