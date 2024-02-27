const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Actor extends Model {};

Actor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cast_ids: {
            type: DataTypes.INTEGER,
            references: {
                model: 'cast',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscore: true,
        modelName: 'actor',
    }
);

module.exports = Actor;