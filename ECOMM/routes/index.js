let express=require('express');
let router=express.Router();
let categoryRoutes=require('./categories.route');
let productRoutes=require('./products.routes');
router.get('/',(req,res,next)=>{
    res.write('This Is The Base Page');
    res.end();
});
//BASE=>/categories,/products
router.use('/categories',categoryRoutes);
router.use('/products',productRoutes);
//UI=>route=>controller=>model=>db
module.exports=router;
