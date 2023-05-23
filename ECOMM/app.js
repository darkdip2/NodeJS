const express = require("express");
let bodyParser = require("body-parser");
let ErrorHandler = require("./middleware/ErrorHandler");
//let dbConnection=require('./config/db.Config');
const router = require("./routes/index");
//let db=require('./model/index);
let db=require('./model');
let expressApp = express();
//All Middleware Should Be Above router
expressApp.use(bodyParser.json());
expressApp.use(router);
//exprerssApp.use(ErrorHandler);
db.categories.hasMany(db.product);
db.connection.sync({force:true}).then(()=>{
    init();
});
//console.log('Table Created Successfully');
let init=async()=>
{
  
  insertCategories();
  insertProducts(); 
  insertRoles();
}
let insertCategories=async()=>
{
    await db.categories.bulkCreate([
        {
            name:'Fashion'
        },
        {
            name:'Mobile'
        },
        {
            name:'Electronics'
        },
        {
            name:'Appliances'
        }

    ]);
}
let insertProducts=async()=>
{
    await db.product.bulkCreate([
        {
            name: "Samsung Galaxy Note",
            categoryId: 2,
            price: 18000,
          },
          {
            name: "Iphone 13",
            categoryId: 2,
            price: 60000,
          },
          {
            name: "Sony bravia",
            categoryId: 4,
            price: 40000,
          },
          {
            name: "Boat Rugged",
            categoryId: 3,
            price: 4000,
          },
          {
            name: "JBL Storm",
            categoryId: 3,
            price: 9000,
          },
          {
            name: "Vu 5",
            categoryId: 3,
            price: 32000,
          },
    ]);
}
let insertRoles=async()=>{

await db.roles.bulkCreate([
  {
    id:1,
    name:'user',
  },
  {
    id:2,
    name:'admin',
  },
]);
/*
  await Roles.create({
    id:1,
    name:'user',
  });
  Roles.Create({
    id:2,
    name:'admin',
  });
*/
}
//POST=>body-parser
module.exports=expressApp;