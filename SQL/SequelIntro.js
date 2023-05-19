const { clear } = require('console');
let sequelize=require('sequelize');
let SequelizeInstance=new sequelize(
    'myfirstdb',
    'root',
    '#Password67',
    {
        host:'localhost',
        dialect:'mysql',
        pool:{
            max:5,//Connections
            min:0,
            acquire:30000,//Timeout ms
            idle:10000//Idle Mode ms
        }
    }
);
let Users=SequelizeInstance.define('users',
{
    /*
    id:{
        type:sequelize.DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },
    */
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
async function GetAllUsers()
{
    let users=await Users.findAll(
        {
            where:{
                email:'vdsfgv@gmail.com'
            }
        }
    );
    console.log(JSON.stringify(users));
}
GetAllUsers();