let express=require('express');
let expressApp=express();
//MIDDLEWARE
let LogTime=(req,rest,next)=>
{
    console.log('Request Time Was '+Date.now());
    next();
}
let LogUrl=(req,rest,next)=>
{
    console.log('Request Url Is '+req.originalUrl);
    next();
}
expressApp.use(LogTime);
expressApp.use(LogUrl);
expressApp.get('/',(req,res)=>{
    res.write('Basic Route');
    res.end();
})
expressApp.listen(8082,()=>{
    console.log('Server Up And Running');
});
//CANHOSTMULTIPLESERVERS
