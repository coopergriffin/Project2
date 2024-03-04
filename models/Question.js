const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model {};

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

module.exports = Question;