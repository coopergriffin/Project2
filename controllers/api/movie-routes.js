const router = require('express').Router();
const { Movie } = require('../../models');

//Get a specific Movie
router.get('/:id', async (req, res) => {
  try {
    const movieData = Movie.findByPk(req.params.id);
    if (!movieData) {
      res.status(404).json({ message: 'No Movie found in the database with that id.' });
      return;
    }
    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new Movie
router.post('/', async (req, res) => {
  //req.body should look like this:
  //  {
  //    title: '',
  //    year: '',
  //    category_id: '',  
  //  },
  try {
    const dbMovieData = Movie.create({
      title: req.body.title,
      year: req.body.year,
      category_id: req.body.category_id,
    });
    res.status(200).json(dbMovieData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a movie
router.put('/:id', async (req, res) => {
  try {
    const dbMovieData = Movie.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!dbMovieData[0]) {
      res.status(404).json({ message: 'No Movie found in the database with this id.' });
      return;
    }
    res.status(200).json(dbMovieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a movie
router.delete('/:id', async (req, res) => {
  try {
    const movieData = Movie.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!movieData) {
      res.status(404).json({ message: 'No Movie found in the database with this id.' });
      return;
    }
    res.status(200).json({ message: 'Movie deleted from the database.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

