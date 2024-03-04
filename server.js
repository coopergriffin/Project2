//Cooper Griffin 
//Created Feb 26th
//Entry point for application. 

// Node module requires and dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 5000;


const sess = {
	secret: 'Super secret secret',
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
	  db: sequelize,
	}),
};


app.use(session(sess));


// Set handlebars as the template engine
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Import and use routes 
app.use(routes);

// Start server

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
});


/*
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
*/




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