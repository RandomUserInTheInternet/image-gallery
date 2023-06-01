// server.js
const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: 'aws.connect.psdb.cloud',
  user: '2d37vfaug9e6f0mnwjmt',
  password: 'pscale_pw_w1PiUtY8F84pThPR1y17GCaW08BBjsEO00J6kiA5amV',
  database: 'image-gallery-db',
});


db.connect((error) => {
  if (error) {
    console.error('Failed to connect to the database:', error);
    return;
  }
  console.log('Connected to the database');
});

// Handle POST requests for image uploads
app.post('/upload', (req, res) => {
  // Implement code to handle image uploads and store image information in the database
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
