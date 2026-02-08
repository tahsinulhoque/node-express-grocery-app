const express = require("express");
const cors = require("cors");

const groceryRoutes = require("./routes/groceryRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/groceries", groceryRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Grocery App API is running 🚀");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
