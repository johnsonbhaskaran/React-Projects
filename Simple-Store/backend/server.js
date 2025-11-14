import express from "express";
import "dotenv/config.js";
import { connectDB } from "./config/dbConnect.js";

const app = express();
const PORT = process.env.PORT || 8000;

/* -----------------------------------------------------------------/
* app Routes *
/------------------------------------------------------------------*/

app.get("/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(200).json({ success: true, data: newProduct });
  } catch (err) {
    console.error("⚠️ Error in creating product:", err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/* -----------------------------------------------------------------/
* Start server *
/------------------------------------------------------------------*/

app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running at localhost:${PORT}`);
});
