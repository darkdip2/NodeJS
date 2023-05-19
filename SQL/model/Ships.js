let sequelizeInstance=require('./../connection');
let sequelize=require('sequelize');
let Ship=sequelizeInstance.define('ship',{
    name:sequelize.TEXT,
    crewCapacity:sequelize.INTEGER,
    amountOfSails:sequelize.INTEGER
},
{
    timestamps:false
});
module.exports=Ship;