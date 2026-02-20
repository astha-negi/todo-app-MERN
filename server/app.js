// Core Module
const path = require('path');

// Load environment variables from server/.env when present (safe local development)
require('dotenv').config({ path: path.join(__dirname, '.env') });
// External Module
const express = require('express');
const mongoose = require('mongoose');

// Load MongoDB connection string from environment variable for security
const DB_path = process.env.MONGODB_URI;
if (!DB_path) {
  console.error('ERROR: MONGODB_URI environment variable is not set. Set it before starting the server.');
  process.exit(1);
}
const cors = require("cors");
const bodyParser = require("body-parser");
//Local Module
const todoItemsRouter = require("./routes/todoItemsRouter");
const errorController= require("./controllers/error");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/api/todo", todoItemsRouter);
app.use(errorController.pageNotFound);

const PORT = 3009;

mongoose.connect(DB_path).then(() =>{
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err =>{
  console.log("Failed to connect to MongoDB", err);
})
