const controller=require('./../controller/auth.controller');
const express=require('express');
const expressApp=express();
const router=express.Router();
const verifySignup=require('./../middleware/VerifySignup');

//CORS=>Cross Origin
expressApp.use(function (req,res,next){
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token,Origin,Content-Type,Accept'
    )
    next();
});
router.post('/signup',
[verifySignup.checkDuplicateUserName,verifySignup.checkRolesExisted],
controller.signup);
router.post('/signin',controller.signin);

module.exports=router;