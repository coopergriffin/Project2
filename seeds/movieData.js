const { Movie } = require("../models");

const movieData = [
  {
    title: "Star Wars",
    year: "1977-05-25",
    categary_id: 1,
  },

  {
    title: "The shawshank Redemption",
    year: "1994-05-20",
    categary_id: 1,
  },
  {
    title: "The Godfather",
    year: "1972-06-01",
    categary_id: 1,
  },
  {
    title: "The Dark Knight",
    year: "2008-06-15",
    categary_id: 1,
  },
  {
    title: "12 Angry Men",
    year: "1957-02-01",
    categary_id: 1,
  },
  {
    title: "Pulp Fiction",
    year: "1994-05-18",
    categary_id: 1,
  },
  {
    title: "Fight Club",
    year: "1999-06-01",
    categary_id: 1,
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);
module.exports = seedMovies;
