let sequelize=require('sequelize')
let sequelizeinstance=new sequelize(
    'ecomm_db',
    'root',
    '#Password67',
    {
        host:'localhost',
        dialect:'mysql',
        pool:
        {
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
    }
);
module.exports=sequelizeinstance