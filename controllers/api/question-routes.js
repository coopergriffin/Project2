const router = require('express').Router();
const { Question } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const questionData = Question.findByPk(req.params.id);
    if (!questionData) {
      res.status(404).json({ message: 'No question found in the database with that id.' });
      return;
    }
    res.status(200).json(questionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const dbquestionData = Question.create({
      content: req.body.content,
      movie_id: req.body.movie_id,
      category_id: req.body.category_id,
    });
    res.status(200).json(dbquestionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  //   req.body should look like this:
  //  {
  //    content: '',
  //    movie_id: '',
  //    category_id: '',  
  //  },

  try {
    const dbquestionData = Question.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!dbquestionData[0]) {
      res.status(404).json({ message: 'No question found in the database with this id.' });
      return;
    }
    res.status(200).json(dbquestionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const questionData = Question.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!questionData) {
      res.status(404).json({ message: 'No question found in the database with this id.' });
      return;
    }
    res.status(200).json({ message: 'question deleted from the database.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

