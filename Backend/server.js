import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";

import messageRoutes from "./routers/message.route.js";
import cors from "cors";





dotenv.config();
const __dirname = path.resolve();



const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Allow Vite dev server origin
}));



app.use("/api/message", messageRoutes);


if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}


app.listen(3000, () => {
  connectDB();
  console.log("Server is running on http://localhost:3000");
});

