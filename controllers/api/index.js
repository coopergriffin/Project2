const router = require('express').Router();

const userRoutes = require('./user-routes');
const movieRoutes = require('./movie-routes');
const questionRoutes = require('./question-routes');
const castRoutes = require('./cast-routes');

router.use('/users', userRoutes);
router.use('/movie', movieRoutes);
router.use('/question', questionRoutes);
router.use('/cast', castRoutes);

module.exports = router;