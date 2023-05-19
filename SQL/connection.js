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
module.exports=SequelizeInstance;