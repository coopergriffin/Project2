const { Cast } = require("../models");

const castData = [
  {
    role_name: "Darth Vader",
    actor_id: 1,
    movie_id: 1,
  },
  {
    role_name: "Andy Dufresne",
    actor_id: 1,
    movie_id: 2,
  },
  {
    role_name: "Vito Andolini Corleone",
    actor_id: 1,
    movie_id: 3,
  },
  {
    role_name: "James Gordon",
    actor_id: 1,
    movie_id: 4,
  },
  {
    role_name: "Davis",
    actor_id: 1,
    movie_id: 5,
  },
  {
    role_name: "Vincent Vega",
    actor_id: 1,
    movie_id: 6,
  },
  {
    role_name: "Edward Norton",
    actor_id: 1,
    movie_id: 7,
  },
];

const seedCasts = () => Cast.bulkCreate(castData);
module.exports = seedCasts;
