//Cooper Griffin 
//Created Feb 26th 

const express = require('express');
const path = require('path'); // Path module for handling file paths

const app = express();
const port = 3000; // Or any other desired port number

// Define the path to your static files directory
const staticPath = path.join(__dirname);

// Serve static files from the 'public' directory
app.use(express.static(staticPath));

// Catch-all route to serve index.html for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
