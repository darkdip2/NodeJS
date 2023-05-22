let express=require('express');
let router=express.Router();
let categoryRoutes=require('./categories.route');
let productRoutes=require('./products.routes');
let authRoutes=require('./auth.routes');
let cartRoutes=require('./cart.routes');
router.get('/',(req,res,next)=>{
    res.write('This Is The Base Page');
    res.end();
});
//BASE=>/categories,/products
//router.use('/ECOMM/API/V1/auth',authRoutes);
router.use('/categories',categoryRoutes);
router.use('/products',productRoutes);
router.use('/auth',authRoutes);
router.use('/cart',cartRoutes);
//UI=>route=>controller=>model=>db
module.exports=router;
