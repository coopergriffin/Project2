const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Movie = require('./Movie');

class Question extends Model {}

Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        movie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'movie',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscore: true,
        modelName: 'question',
    }
);

// Define the many-to-many association with the Movie model
Question.belongsToMany(Movie, { through: 'MovieQuestion' });

module.exports = Question;
