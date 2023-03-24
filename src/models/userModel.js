const {Model,DataTypes} = require('sequelize');
const sequelize = require("../config");

class User extends Model{}

User.init(
{
    nick:{
        type:DataTypes.STRING
    },
    hashtag:{
        type:DataTypes.STRING
    }
},
{
    sequelize,
    modelName:'user',
    timestamps: true
});

module.exports = User;