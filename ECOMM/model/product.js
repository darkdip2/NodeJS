let sequelize=require('sequelize');
let dbConnection=require('./../config/db.Config');
module.exports=dbConnection.define('products',{
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
    price:
    {
        notNull:true,
        type:sequelize.DataTypes.BIGINT
    },
    /*
    categoryId:
    {
        notNull:true,
        type:sequelize.DataTypes.INTEGER
    },
    */

},
{
    timestamps:false
});