const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test') // Use 127.0.0.1 instead of localhost
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Could not connect to MongoDB:', err));

app.get('/', (req, res) => {
  res.send("Hello, MongoDB is working!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
