import express from "express";
import dotenv from "dotenv";
import connectDb from "./Config/database.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDb();
  console.log(`Server listening at Port ${PORT}`);
});
