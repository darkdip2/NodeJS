const express = require("express");
let bodyParser = require("body-parser");
let ErrorHandler = require("./middleware/ErrorHandler");
let serverConfig = require("./config/server.Config");
let dbConnection=require('./config/db.Config');
let Categories=require('./model/category');
let Products=require('./model/product');
const router = require("./routes/index");
let db=require('./model/index');
let Roles=db.roles;
let exprerssApp = express();
//All Middleware Should Be Above router
exprerssApp.use(bodyParser.json());
exprerssApp.use(router);
exprerssApp.use(ErrorHandler);
Categories.hasMany(Products);
let init=async()=>
{
  await dbConnection.sync({force:true});
  console.log('Table Created Successfully');
  insertCategories();
  insertProducts(); 
  insertRoles();
}
let insertCategories=async()=>
{
    await Categories.bulkCreate([
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
    await Products.bulkCreate([
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
await Roles.bulkCreate([
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
  await Roles.Create({
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
exprerssApp.listen(serverConfig.PORT, () => {
  console.log("Server Is Running On Port " + serverConfig.PORT);
});
init();
