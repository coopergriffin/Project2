const router = require('express').Router();
const { Category, Movie, Question, Cast } = require('../models'); //Imports models
const withAuth = require('../utils/auth'); //Import authentication function

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

router.get('/login', (req, res) => { //login page route
  if (res.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;

