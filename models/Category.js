const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {};

Category.init(
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
            unique: true,
        },
        question_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'question',
                key: 'id'
            },
        },
        
    },
    {
        sequelize,
        freezeTableName: true,
        underscore: true,
        modelName: 'category',
    }
);

module.exports = Category;