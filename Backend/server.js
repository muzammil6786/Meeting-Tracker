import express from "express";
import cors from "cors";
import "./config/db.js";
import actionRoutes from "./routes/actionRoutes.js";
import transcriptRoutes from "./routes/transcriptRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 4500 ;

app.use(cors());
app.use(express.json());
app.use(express.text());

// app.use(express.urlencoded({ extended: true }));


app.use("/actions", actionRoutes);
app.use("/transcripts", transcriptRoutes);
app.use("/health", healthRoutes);


app.listen(PORT, () => {
  console.log("Server running on", PORT);
});

