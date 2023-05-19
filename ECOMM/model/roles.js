let sequelize=require('sequelize');
let dbConnection=require('./../config/db.Config');
module.exports=dbConnection.define('roles',{
    id:
    {
        primaryKey:true,
        notNull:true,
        type:sequelize.DataTypes.INTEGER,
        autoIncrement:true
    },
    name:
    {
        notNull:true,
        type:sequelize.DataTypes.STRING
    },
},
{
    timestamps:false
});
