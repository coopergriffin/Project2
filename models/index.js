const User = require('./User');
const Category = require('./Category');
const Movie = require('./Movie');
const Question = require('./Question');
const Cast = require('./Cast');
const Actor = require('./Actor');

Movie.belongsTo(Category, {
    foreignKey: 'category_id'
});

Movie.hasMany(Question);

// Define the many-to-many association between Movie and Question
Movie.belongsToMany(Question, { through: 'MovieQuestion' });
Question.belongsToMany(Movie, { through: 'MovieQuestion' });

Movie.belongsToMany(Actor, { through: Cast });
Actor.belongsToMany(Movie, { through: Cast });

module.exports = { User, Category, Movie, Question, Cast, Actor };


