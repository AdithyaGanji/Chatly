import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import { connectDB } from "./lib/db.js";

dotenv.config();
const app = express();
const PORT = 8080;

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
  connectDB();
});
