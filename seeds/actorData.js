const { Actor } = require("../models");

const actorData = [
  {
    name: "Brad Pitt",
  },
  {
    name: "Mark Hamill",
  },
  {
    name: "Tim Robbins",
  },
  {
    name: "Marlon Brando",
  },
  {
    name: "Heath Ledger",
  },
  {
    name: "Lee J. Cobb",
  },
  {
    name: "Samuel L. Jackson",
  },
];

const seedActors = () => Actor.bulkCreate(actorData);
module.exports = seedActors;
