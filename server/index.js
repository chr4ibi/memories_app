import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"


import postsRoutes from "./routes/posts.js"

const app = express();
dotenv.config()

// Middlewares
app.use(express.json({ limit: "30mb"}));
app.use(cors());

// Routes
app.use("/posts", postsRoutes)

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));



