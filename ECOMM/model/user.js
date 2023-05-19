let dbConnection=require('./../config/db.Config');
const sequelize=require('sequelize');
const User=dbConnection.define('users',{
    username:{type:sequelize.STRING,},
    email:{type:sequelize.STRING,},
    password:{type:sequelize.STRING,},
});
module.exports=User;