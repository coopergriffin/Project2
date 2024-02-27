const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cast extends Model {};

Cast.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        role_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        actor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'actor',
                key: 'id'
            },
        },
        movie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'movie',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscore: true,
        modelName: 'cast',
    }
);

module.exports = Cast;