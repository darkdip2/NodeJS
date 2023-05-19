let sequelize=require('sequelize');
const SequelizeInstance=require('./../connection');
let Users=SequelizeInstance.define('users',
{
    id:{
        type:sequelize.DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },
    email:
    {
        type:sequelize.DataTypes.STRING,
        allowNull:false
    },
    password:
    {
        type:sequelize.DataTypes.STRING,
        allowNull:false
    },
    createdAt:
    {
        type:sequelize.DataTypes.DATE,
        default:Date.now()
    }
},
{
    //id+updatedAtid+createdAt->SEQUELIZEAUTO
    timestamps:false
});
module.exports=Users