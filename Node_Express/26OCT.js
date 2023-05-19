let http=require("http");
let server=http.createServer((req,res)=>{
    switch(req.url)
    {
        case'/grocery':
            res.write('This Is Grocery Route');
            break;
        case '/clothing':
            res.write('This Is Clothing Route');
            break;
        default:
            res.write('This Is Home Page');
            break;
    }
    res.end();
});
server.listen(8082,()=>
{
    console.log('Server Is Up And Running');
});
