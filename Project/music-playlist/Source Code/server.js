/*const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
const path = require('path');


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve frontend at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes
app.use('/api/songs', require('./routes/songs'));


// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON requests
app.get('/test', (req, res) => {
  res.send('Server is working!');
});

// Routes
app.use('/api/songs', require('./routes/songs'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🎧 Server is running on http://localhost:${PORT}`);
});
*/
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();

// Connect to MongoDB FIRST
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// API routes
app.use('/api/songs', require('./routes/songs'));

// Test route (to check server status)
app.get('/test', (req, res) => {
  res.send('✅ Server is working!');
});

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback: Serve frontend for all other non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🎧 Server is running on http://localhost:${PORT}`);
});
