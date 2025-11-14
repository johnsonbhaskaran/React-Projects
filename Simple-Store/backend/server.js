import express from "express";
import "dotenv/config.js";
import { connectDB } from "./config/dbConnect.js";

const app = express();
const PORT = process.env.PORT || 8000;

/* -----------------------------------------------------------------/
* app Routes *
/------------------------------------------------------------------*/

app.get("/products", (req, res) => {
  res.send("🚀 Reached products route");
});

/* -----------------------------------------------------------------/
* Start server *
/------------------------------------------------------------------*/

app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running at localhost:${PORT}`);
});
