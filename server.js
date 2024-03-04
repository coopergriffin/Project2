//Cooper Griffin 
//Created Feb 26th
//Entry point for application. 


//Node module requires and dependencies 
const express = require('express');
const exphbs = require('express-handlebars').create({ defaultLayout: false });
const session = require('express-session');
// Initialize Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();

// Set up session and connect to Sequelize db
const sess = {
	secret: 'movie trivia',
	cookie: {
		maxAge: 60 * 60 * 1000, //Session will expire after 1 hour (defined as 1000ms)
		httpOnly: true, //will only store cookies in server connected to HTTP
		secure: false, //Set to false to always initialize cookies.
		sameSite: 'strict',
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

app.use(session(sess));

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Handlebars middleware
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));

//Acceses static files in the public folder 
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('login');
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