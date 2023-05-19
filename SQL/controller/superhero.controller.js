let SuperHero=require("../model/SuperHero");
let SequelizeInstance = require("../connection");
let sequelize=require('sequelize');
/////C-rud
async function createTable() 
{
    await SequelizeInstance.sync({force:true});
    console.log("superhero Table Created Successfully");
}
//createTable();
async function insertSuperHero() 
{
    //await SuperHero.create
    await SuperHero.bulkCreate([
    {
      id:1,
      name:'IRON MAN',
      power:95,
      comics:'Marvel'
    },
    {
        id:2,
        name:'BAT MAN',
        power:80,
        comics:'DC'
    },
    {
        id:3,
        name:'SUPER MAN',
        power:100,
        comics:'DC'
    },
    {
        id:4,
        name:'WANDA',
        power:67,
        comics:'Marvel'
    },
    {
        id:5,
        name:'BLACK PANTHER',
        power:70,
        comics:'Marvel'
    },
  ]);
}
//insertSuperHero();
//////cRud
async function getAllSuperHeros()
{
    let A=await SuperHero.findAll();
    console.log(JSON.stringify(A,null,2));
}
async function getMarvelSuperHeros()
{
    let A=await SuperHero.findAll({
        where:{comics:'Marvel'}
    });
    console.log(JSON.stringify(A,null,2));
}
async function getSelectedColumns()
{
    let H=await SuperHero.findAll({
        //attributes:['name',['power','strength']]
        attributes:[[sequelize.fn('SUM',sequelize.col('power')),'TotalPower']]
    })
    console.log(JSON.stringify(H,null,2));
}
async function excludeColumns()
{
    let A=await SuperHero.findAll(
        {
            attributes:{exclude:['power']}
        }
    );
    console.log(JSON.stringify(A,null,2));
}
async function powerfulSuperHero()
{
    let A=await SuperHero.findAll(
        {
            where:
            {
                [sequelize.Op.and]:
                {
                    power:{[sequelize.Op.gte]:70},
                    comics:{[sequelize.Op.eq]:'Marvel'}
                }
            }
        }
    );
    console.log(JSON.stringify(A,null,2));
}
//getAllSuperHeros();
//getMarvelSuperHeros();
//getSelectedColumns();
//excludeColumns();
//powerfulSuperHero();
/////crUd
async function UpdatePower()
{
    await SuperHero.update(
    {
        'power':80
        //'name':
    },
    {
        where:
        {
            comics:'Marvel'
        }
    }
    )
}
//UpdatePower();
//////cruD
async function DeleteRows(){
    //drop is for drop[ping table]
    await SuperHero.destroy({
        where:{
            comics:'DC'
        }
    });
    console.log('Deleted');
}
async function Delete()
{
    await SuperHero.drop();
}
//Delete();
//DeleteRows();
//////GROUPBY
async function groupHeros()
{
    let S=await SuperHero.findAll({
        attributes:['comics',[sequelize.fn('SUM',sequelize.col('power')),'TOTAL STRENGTH']],
        group:'comics'
    });
    console.log(JSON.stringify(S,null,2));
}
//groupHeros();
//////ORDERBY
async function SortSuperHeros()
{
    let S=await SuperHero.findAll({
        order:[['power','DESC']]
    });
    console.log(JSON.stringify(S,null,2));
}
//SortSuperHeros();
//one-to-one
//M1.has(M2)
//M2.belongsto(M1)
//one-to-many
//many-to-many
