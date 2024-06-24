const express = require("express");
const connectDB = require("./config/db");
const questionsRoutes = require("./routes/questions");
const { PORT } = require("./utils/constants");

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use("/api", questionsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
