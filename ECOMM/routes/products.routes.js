let express=require('express');
let productRouter=express.Router();
let authJwt=require('./../middleware/authJwt');
let productController=require('./../controller/product.controller');
productRouter.get('/',[authJwt.VerifyToken],productController.getAllProducts);
productRouter.get('/:productId',productController.getProductbyId);
productRouter.post('/',productController.addNewProduct);
productRouter.delete('/:productId',productController.deleteProductById)
productRouter.put('/:productId',productController.updateProductById);
module.exports=productRouter