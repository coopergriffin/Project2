const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
            validate: {
                len: [3],
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserdata.password, 10);
                return newUserData;
            },
        },
        sequelize,
        freezeTableName: true,
        underscore: true,
        modelName: 'user',
    }
);

module.exports = User;