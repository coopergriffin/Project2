//Cooper Griffin 
//Created Feb 26th
//Entry point for application. 

// Node module requires and dependencies
const express = require('express');
const exphbs = require('express-handlebars').create({ defaultLayout: false });
const path = require('path');

const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Handlebars middleware
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));

// Accesses static files in the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
	// Redirect to the login page
	res.redirect('/login');
});

// Route for the login page
app.get('/login', (req, res) => {
	// Render login page
	res.render('login');
});

// Handle login form submission
app.post('/login', (req, res) => {
	// Perform authentication (example: check username and password)
	// Assuming authentication is successful, redirect to Flick Pick page
	res.redirect('/flickpick');
});

// Route for the Flick Pick page
app.get('/flickpick', (req, res) => {
	// Render Flick Pick page
	res.render('flickpick');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server listening on port http://localhost:${PORT}`);
});



/* Old server.js code 
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

*/