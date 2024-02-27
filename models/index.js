const User = require('./User');
const Category = require('./Category');
const Movie = require('./Movie');
const Question = require('./Question');
const Cast = require('./Cast');
const Actor = require('./Actor');


Category.hasMany(Question, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Movie.belongsTo(Category, {
    foreignKey: 'category_id'
});

Movie.hasMany(Question, {
    foreignKey: 'movie_id'
});

Question.belongsToMany(Movie, {
    foreignKey: 'movie_id'
});

Cast.belongsTo(Movie, {
    foreignKey: 'movie_id'
});

Movie.hasMany(Cast, {
    foreignKey: 'cast_members'
});

Cast.hasOne(Actor, {
    foreignKey: 'actor_id'
});

Actor.belongsToMany(Cast, {
    foreignKey: 'cast_ids'
});

module.exports = { User, Category, Movie, Question, Cast, Actor };

