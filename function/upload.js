// upload.js

// Handle POST requests for image uploads
app.post('/upload', (req, res) => {
  const imageFile = req.body; // Assuming the image file is sent in the request body

  // Implement code to handle the image upload and store image information in the database
  // Example: Insert the image file into a "images" table with columns for image name, file path, etc.
  const query = 'INSERT INTO images (name, path) VALUES (?, ?)';
  const values = [imageFile.name, imageFile.path];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error('Failed to store image in the database:', error);
      return res.status(500).json({ error: 'Failed to store image in the database' });
    }

    return res.status(200).json({ message: 'Image uploaded and stored in the database' });
  });
});
