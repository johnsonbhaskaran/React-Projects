import express from "express";
import "dotenv/config.js";
import { connectDB } from "./config/dbConnect.js";
import productRoutes from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 8000;

/* -----------------------------------------------------------------/
                    * Middlewares *
/------------------------------------------------------------------*/

app.use(express.json()); // allows to accept JSON data in the req. body

/* -----------------------------------------------------------------/
* app Routes *
/------------------------------------------------------------------*/

app.use("/api/products", productRoutes);

/* -----------------------------------------------------------------/
* Start server *
/------------------------------------------------------------------*/

app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running at localhost:${PORT}`);
});
