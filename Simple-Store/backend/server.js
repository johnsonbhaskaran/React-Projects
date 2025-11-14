import express from "express";
import "dotenv/config.js";
import { connectDB } from "./config/dbConnect.js";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

/* -----------------------------------------------------------------/
                    * app Routes *
/------------------------------------------------------------------*/

app.get("/", (req, res) => {
  res.send("Hi");
});

/* -----------------------------------------------------------------/
                    * Start server *
/------------------------------------------------------------------*/

app.listen(PORT, () => {
  console.log(`✅ Server running at localhost:${PORT}`);
});
