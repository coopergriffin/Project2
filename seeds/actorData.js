const { Actor } = require("../models");

const actorData = [
  {
    name: "Brad1",
  },
  {
    name: "Tom1",
  },
  {
    name: "name1",
  },
  {
    name: "name2",
  },
  {
    name: "name3",
  },
  {
    name: "name4",
  },
  {
    name: "name5",
  },
];

const seedActors = () => Actor.bulkCreate(actorData);
module.exports = seedActors;
