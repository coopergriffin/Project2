//Cooper Griffin 
//March 3rd 2024 
//Handles entry and home routes for project


const router = require('express').Router();
//const { Category, Movie, Question, Cast } = require('../models'); //Imports models
const withAuth = require('../utils/auth'); //Import authentication function

router.get('/', (req, res) => {
	// Redirect to the login page
	res.redirect('/login');
});

// Route for the login page
router.get('/login', (req, res) => {
	// Render login page
	res.render('login', { layout: false });
});

router.get('/flickpick', (req, res) => {
	// Render Flick Pick page
	res.render('flickpick', { layout: false });
});

// Handle login form submission
router.post('/login', (req, res) => {
	// Perform authentication (example: check username and password)
	// Assuming authentication is successful, redirect to Flick Pick page
	res.redirect('/flickpick');
});

module.exports = router;

/*
//Homepage route to start game
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Category selection page
router.get('/play', withAuth, async (req, res) => {
  try {
    const categoryData = await Category.findall();
    const categories = categoryData.map((category) => 
    category.get({ plain: true })
    );

    res.render('categorySelect', {
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Game page when Movie category is selected
router.get('/play/movies', withAuth, async (req, res) => {
  try {
    const dbMovieData = await Movie.findAll({
      where: {
        category_id: 0,
      },
      include: [
        {
          model: Question,
          attributes: ['id', 'content'],
        }, {
          model: Cast,
          attributes: ['role_name', 'actor_id'],
        },
      ]
    });

    const movies = dbMovieData.map((movie) => 
    movie.get({ plain: true }));

    res.render('playMovies', {movies, loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;

*/