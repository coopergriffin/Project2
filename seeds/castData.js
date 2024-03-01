const { Cast } = require("../models");

const castData = [
  {
    role_name: "",
    actor_id: 1,
    movie_id: 1,
  },
  {
    role_name: "",
    actor_id: 1,
    movie_id: 1,
  },
  {
    role_name: "",
    actor_id: 1,
    movie_id: 1,
  },
  {
    role_name: "",
    actor_id: 1,
    movie_id: 1,
  },
  {
    role_name: "",
    actor_id: 1,
    movie_id: 1,
  },
  {
    role_name: "",
    actor_id: 1,
    movie_id: 1,
  },
  {
    role_name: "",
    actor_id: 1,
    movie_id: 1,
  },
];

const seedCasts = () => Cast.bulkCreate(castData);
module.exports = seedCasts;
