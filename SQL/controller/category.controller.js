let Categories=require("./../model/Categories");
let SequelizeInstance = require("./../connection");
let sequelize=require('sequelize');

async function createTable() {
  await SequelizeInstance.sync({force:true});
  console.log("categories Table Created Successfully");
  insertCategories();
  GetAllCategories();
}

async function insertCategories() {
  //await Categories.create
  await Categories.bulkCreate([{
    name: "Mobile Phone",
    description: "Mobile Descriptions"
  },
  {
    name: 'TV',
    description:'TV Description'
  }
  ,
  {
    name:'Laptop',
    description:'Laptop Description'
  }
]);
}

createTable();
async function GetAllCategories()
{
    /*
    let C=await Categories.findAll();
    console.log(JSON.stringify(C));
    */
   /*
    let Count=await Categories.count({
      distinct:true,
      col:'id
    });
    console.log(Count);
  */
 /*
  let allCat=await Categories.findAll(
    {
      attributes:
      [[sequelize.fn('COUNT',sequelize.col('id')),'num_category']]
    });
    console.log(JSON.stringify(allCat));
    */
   const C=await Categories.findAll({
    where:
    {
      //[sequelize.Op.or]:[{id:'1'},{id:'2'}]
      [sequelize.Op.and]:[{id:'1'},{name:'Mobile Phone'}]
    }
   });
   console.log(JSON.stringify(C));
}
