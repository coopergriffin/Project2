const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {};

Movie.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }, 
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        year: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        genre_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'genre',
                key: 'id',
            },
        },
        cast_members: {
            type: DataTypes.STRING,
            references: {
                model: 'cast',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscore: true,
        modelName: 'movie',
    }
);

module.exports = Movie;