const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config');

class User extends Model{}

User.init(
{
    nick:{
        type:DataTypes.STRING,
        allowNull: false,
        len: [5,20]
    },
    hashtag:{
        type:DataTypes.STRING,
        allowNull: false,
        len: [2,4]
    }
},
{
    sequelize,
    modelName:'user',
    timestamps: true
});

module.exports = User;