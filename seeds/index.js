const sequelize = require("../config/connection");

const seedMovie = require("./movieData");
const seedActor = require("./actorData");
const seedCast = require("./castData");
const seedQuestion = require("./questionData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedMovie();
  await seedActor();
  await seedCast();
  await seedQuestion();
  process.exit(0);
};

seedDatabase();
