let express=require('express');//access to application
let expressApp=express();//function
//http call for base route
expressApp.get('/',(req,res)=>
{
    res.write('This Is My Base Route');
    res.end();
});
expressApp.get('/food',(req,res)=>
{
    res.write('This Is My Food Route');
    res.end();
});
expressApp.get('/clothing',(req,res)=>
{
    res.write('This Is My Clothing Route');
    res.end();
});
expressApp.get('/grocery',(req,res)=>
{
    res.write('This Is My Grocery Route');
    res.end();
});
expressApp.listen(8082,()=>
{
    console.log('Server Is Up And Running');
});
