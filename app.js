const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const itemRoutes = require('./routes/itemRoutes');

// Initialize Express App
const app = express();

// Middleware
app.use(bodyParser.json());

// Database Connection
const DB_URI = 'mongodb://localhost:27017/menuManagement'; // MongoDB URL
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/api/categories', categoryRoutes); // Category Routes
app.use('/api/subcategories', subCategoryRoutes); // SubCategory Routes
app.use('/api/items', itemRoutes); // Item Routes

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Menu Management API!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Start the Server
const PORT = 5000; // You can change the port number if needed
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
