let db=require('./../config/db.Config');
const sequelize=require('sequelize');
let Cart=db.define('cart',
{
    id:{
        type:sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    cost:{
        type:sequelize.DataTypes.DECIMAL,
    },
},
{
    timestamps:false,
});
module.exports=Cart;