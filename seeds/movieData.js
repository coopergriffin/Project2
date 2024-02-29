
const sequelize = require('../config/connection');
const { User, Product } = require('../models');

const movieSeedData = require('./movieSeedData.json');
const actorSeedData = require('./actorSeedData.json');
const castSeedData = require('./castSeedData.json');
const questionSeedData = require('./questionSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const movie = await Movie.bulkCreate(movieData);
  const actor = await Actor.bulkCreate(actorData);
  const cast = await Cast.bulkCreate(castData);
  const question = await Question.bulkCreate(questionData);
  process.exit(0);
};

seedDatabase();






// const { Movie } = require('../models');

// const movieData = [
//     {
//         title: 'Star Wars',
//         year: '1977-05-25',
//         genre_id: 1,
//         cast_members: [],
//     },
//     {
//         title: 'The shawshank Redemption',
//         year: '1994-05-20',
//         genre_id: 1,
//         cast_members: [],
//     },
//     {
//         title: 'The Godfather',
//         year: '1972-06-01',
//         genre_id: 1,
//         cast_members: [],
//     },
//     {
//         title: 'The Dark Knight',
//         year: '2008-06-15',
//         genre_id: 1,
//         cast_members: [],
//     },
//     {
//         title: '12 Angry Men',
//         year: '1957-02-01',
//         genre_id: 1,
//         cast_members: [],
//     },
//     {
//         title: 'Pulp Fiction',
//         year: '1994-05-18',
//         genre_id: 1,
//         cast_members: [],
//     },
//     {
//         title: 'Fight Club',
//         year: '1999-06-01',
//         genre_id: 1,
//         cast_members: [],
//     },

// ]