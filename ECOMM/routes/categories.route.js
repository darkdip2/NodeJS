let express=require('express');
let categoryRouter=express.Router();
let categoryController=require('./../controller/category.controller');
let requestValidator=require('./../middleware/RequestValidator');
categoryRouter.get('/',categoryController.getAllCategories);

categoryRouter.get('/:categoryId'
,[requestValidator.validateReqForCategoryId]
,categoryController.getCategorybyId);

categoryRouter.post('/'
,[requestValidator.validateReqForCategoryName]
,categoryController.addNewCategory);

categoryRouter.delete('/:categoryId'
,[requestValidator.validateReqForCategoryId]
,categoryController.deleteCategoryById);

categoryRouter.put('/:categoryId'
,[requestValidator.validateReqForCategoryName,requestValidator.validateReqForCategoryId]
,categoryController.updateCategoryById);

module.exports=categoryRouter