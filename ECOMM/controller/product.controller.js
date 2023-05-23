let db=require('./../model');
let sequelizeInstance=require('./../config/db.Config');
let create=async(req,res,next)=>{
    let productToAdd=req.body;
    try{
        await db.product.create(productToAdd);
        res.status(201).json(productToAdd);
    }
    catch(err)
    {
        res.status(500).json({
            message:'Some Internal Error Occured',
        });
    }
};
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
    else products=[...await db.product.findAll()];
    //res.writeHead(200,{'Content-Type':'application/json'});
    res.send(JSON.stringify(products));
    res.end();
}
let filterByCategory=async(categoryId)=>
{
    let filterProducts=await db.product.findAll({
        where:{categoryId:categoryId,},
    });
    return filterProducts;
}
let filterByPriceRange=async(minPrice,maxPrice)=>
{
    let filteredProducts=await db.product.findAll(
        {
            where:{
                price:{
                    [db.sequelize.Op.gte]:minPrice,
                    [db.sequelize.Op.lte]:maxPrice,
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
    let products=await db.product.findAll({
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
        await db.product.create({
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
    await db.product.destroy({
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
    await db.product.update(productToUpdate,
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
  updateProductById,
  create,
}
module.exports=all