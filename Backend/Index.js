import express from "express";
import dotenv from "dotenv";
import connectDb from "./Config/database.js";
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser";
import cors from 'cors'
dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
// app.use(express.urlencoded({extended : true})) 
app.use(express.json())
app.use(cookieParser())
// to resolve the cors error
const corsOption = {
  origin : "http://localhost:3000",
  credentials : true
}
app.use(cors(corsOption))

// routes

app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)


app.listen(PORT, () => {
  connectDb();
  console.log(`Server listening at Port ${PORT}`);
});
