const db=require('./../model/index');
let createCart=async(req,res,next)=>{
    const cart={cost:0}
    try{
        await db.cart.create(cart);
        res.status(200).json({
            message:'Cart Created',
        });
    }
    catch(err)
    {
        res.status(401).json({
            message:'Some internal error happened',
        });
    }
};
let updateCart=async(req,res,next)=>{
    let cartId=req.params.cartId;
    let cartToUpdate=await db.cart.findByPk(cartId);
    if(cartToUpdate)
    {
        let productsToAdd=await db.product.findAll({
            where:{id:req.body.productId,},
        });
        if(productsToAdd)
        {
            await cartToUpdate.setProducts(productsToAdd);
            console.log('Product Added');
            let totalCost=0;
            let productsSelected=[];
            let products=await cartToUpdate.getProducts();
            for(let I=0;I<products.length;I++)
            {
                totalCost+=products[I].price;
                productsSelected.push({
                    id:products[I].id,
                    name:products[I].name,
                    cost:products[I].price,
                });
            }
            res.status(200).json({
                id:cartToUpdate.id,
                productsSelected,
                totalCost,
            });
        }
    }
    else res.status(404).json({message:'Cart Not Found'});
};
let getCart=async(req,res,next)=>{
    let cart=await db.cart.findByPk(req.params.cartId);
    let totalCost=0;
    let productsSelected=[];
    let products=await cart.getProducts();
    for(let I=0;I<products.length;I++)
    {
        totalCost+=products[I].price;
        productsSelected.push({
            id:products[I].id,
            name:products[I].name,
            cost:products[I].cost,
        });
    }
    res.status(200).json({
        id:cart.id,
        productsSelected,
        totalCost,
    });
};
module.exports={
    createCart,
    updateCart,
    getCart,
};