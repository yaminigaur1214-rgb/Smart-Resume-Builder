const express = require("express");
const cors = require("cors");
require("dotenv").config();
const resumeRoutes = require("./routes/resumeRoutes");

const aiRoutes = require("./routes/aiRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

app.use("/api/ai", aiRoutes);

app.use("/api/resumes", resumeRoutes);

app.get("/", (req, res) => {
  res.send("Smart Resume Builder Backend is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});