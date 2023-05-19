const sequelize = require("sequelize");
let SequelizeInstance = require("../connection");
let SuperHero = SequelizeInstance.define('superhero',
{
    id:
    {
        type:sequelize.DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },
    name:
    {
        type:sequelize.DataTypes.STRING,
        allowNull:false
    },
    power:sequelize.DataTypes.BIGINT,
    comics:sequelize.DataTypes.STRING
},
{
    timestamps:false,
}  
);
module.exports=SuperHero