const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🔐 SecureBlog API is running over HTTPS!');
});

module.exports = app;
