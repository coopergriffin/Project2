const router = require('express').Router();
const { Cast } = require('../../models');

//Get specific cast by id
router.get('/:id', async (req, res) => {
  try {
    const castData = Cast.findByPk(req.params.id);
    if (!castData) {
      res.status(404).json({ message: 'No cast found in the database with that id.' });
      return;
    }
    res.status(200).json(castData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Create new cast
router.post('/', async (req, res) => {
  //req.body should look like this:
  //  {
  //    role_name: '',
  //    actor_id: '',
  //    movie_id: '',  
  //  },
  try {
    const dbcastData = Cast.create({
      role_name: req.body.role_name,
      actor_id: req.body.actor_id,
      movie_id: req.body.movie_id,
    });
    res.status(200).json(dbcastData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Update specific cast by id
router.put('/:id', async (req, res) => {
  try {
    const dbcastData = Cast.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!dbcastData[0]) {
      res.status(404).json({ message: 'No cast found in the database with this id.' });
      return;
    }
    res.status(200).json(dbcastData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete cast by id
router.delete('/:id', async (req, res) => {
  try {
    const castData = Cast.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!castData) {
      res.status(404).json({ message: 'No cast found in the database with this id.' });
      return;
    }
    res.status(200).json({ message: 'cast deleted from the database.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

