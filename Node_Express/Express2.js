let express=require('express');
let expressApp=express();
/*
expressApp.get('/user/1',(req,res)=>{
    res.write('This Is User 1');
    res.end();
});
*/
/*
expressApp.get('/user/:userId',(req,res)=>{
    res.write('This Is User '+req.params.userId);
    res.end();
});
*/
//REGULAREXPRESSION
//...../^\/user\/(\d{2})$/
/*
expressApp.use(express.static('html'))
expressApp.get('/',(req,res)=>{
    res.sendFile('index.html');
})
*/
expressApp.get(/^\/user\/(\d+)$/,(req,res)=>{
    res.write('This Is User No. '+req.params[0]);
    res.end();
})
expressApp.listen(8082,()=>
{
    console.log('Server Up And Running');
});