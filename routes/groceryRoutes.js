const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(__dirname, "../data/groceries.json");

// Read Data
const readData = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Write Data
const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// GET all groceries
router.get("/", (req, res) => {
  const groceries = readData();
  res.json(groceries);
});

// ADD grocery
router.post("/", (req, res) => {
  const groceries = readData();
  const newItem = {
    id: Date.now(),
    ...req.body
  };

  groceries.push(newItem);
  writeData(groceries);

  res.status(201).json(newItem);
});

// UPDATE grocery
router.put("/:id", (req, res) => {
  const groceries = readData();
  const id = Number(req.params.id);

  const index = groceries.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  groceries[index] = { ...groceries[index], ...req.body };
  writeData(groceries);

  res.json(groceries[index]);
});

// DELETE grocery
router.delete("/:id", (req, res) => {
  let groceries = readData();
  const id = Number(req.params.id);

  groceries = groceries.filter(item => item.id !== id);
  writeData(groceries);

  res.json({ message: "Item deleted successfully" });
});

module.exports = router;
