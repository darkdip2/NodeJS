let Ship=require('./Ships');
let Captain=require('./Captain');
let sequelizeInstance=require('../connection');
const sequelize=require('sequelize');
Captain.hasOne(Ship);
Ship.belongsTo(Captain);
async function insertData()
{
    let ship=await Ship.create({
        name:'Black Pearl',
        crewCapacity:1000,
        amountOfSails:50
    })
    ship.createCaptain({name:'Jack Sparrow',skillLevel:1})
}
async function createTables()
{
    await sequelizeInstance.sync();
    console.log('Table Created');
    insertData();
}
//createTables();
//captainid-->FOREIGNKEY
async function Find()
{
    const awesomeCaptain=await Captain.findOne({
        where:
        {
            name:'Jack Sparrow'
        }
    });
    console.log(JSON.stringify(awesomeCaptain,null,2));
    const HisShip=await awesomeCaptain.getShip();
    console.log(HisShip.amountOfSails);
}
Find();
