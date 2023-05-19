let Products=require('./../model/product');
let sequelizeInstance=require('./../config/db.Config');
let sequelize=require('sequelize');
let getAllProducts=async(req,res,next)=>
{
    //if(Object.keys(req.query).length==0)=>FindAll
    let categoryId=req.query.categoryId;
    let minPrice=req.query.minPrice,maxPrice=req.query.maxPrice;
    let products=[];
    if(categoryId)
    {
        products=[...await filterByCategory(categoryId)];
    }
    else if(minPrice&&maxPrice)products=[...await filterByPriceRange(minPrice,maxPrice)];
    else products=await [...Products.findAll()];
    //res.writeHead(200,{'Content-Type':'application/json'});
    res.send(JSON.stringify(products));
    res.end();
}
let filterByCategory=async(categoryId)=>
{
    let filterProducts=await Products.findAll({
        where:{categoryId:categoryId,},
    });
    return filterProducts;
}
let filterByPriceRange=async(minPrice,maxPrice)=>
{
    let filteredProducts=await Products.findAll(
        {
            where:{
                price:{
                    [sequelize.Op.gte]:minPrice,
                    [sequelize.Op.lte]:maxPrice,
                }
            },
        }
    )
    return filteredProducts;
}
//UI=>route=>controller=>model=>sqlconnection
let getProductbyId=async(req,res,next)=>
{
    let id=req.params.productId;
    if(!id){res.status(400).send('ID not passed')}
    let products=await Products.findAll({
        where:{
            id:id
        }
    });
    res.writeHead(200,{'Content-type':'application/json'})
    res.write(JSON.stringify(products));
    res.end();
}
let addNewProduct=async(req,res,next)=>
{
    /*
    let product=req.body;
    await Products.create({
        name:product.name,
        price:product.price,
        categoryId:product.categoryId
    });
    res.status(201).send('Data Added');
    res.end();
    */
    try
    {
        let product=req.body;
        await Products.create({
            name:product.name,
            price:product.price,
            categoryId:product.categoryId
        });
        res.status(201).send('Data Added');
    }
    catch(err)
    {
        //Default HTML page by express
        next(err);
        //res.status(400).send('Something Went Wrong');
    }
    finally
    {
        res.end();

    }
}
let deleteProductById=async(req,res,next)=>
{
    let id=req.params.productId;
    await Products.destroy({
        where:{id:id}
    });
    res.status(200).send('Product Deleted');
    res.end();
}
let updateProductById=async(req,res,next)=>
{
    let id=req.params.productId;
    let productToUpdate={
        name:req.body.name,
        price:req.body.price,
        categoryId:req.body.categoryId
    };
    await Products.update(productToUpdate,
        {
            where :{id:id}
        });
    let updateProduct=await Products.findByPk(id);
    res.status(200).send(updateProduct);
    res.end();
}
let all={
  getAllProducts,
  getProductbyId,
  addNewProduct,
  deleteProductById,
  updateProductById
}
module.exports=all