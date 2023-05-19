let http=require("http");
let Server=http.createServer((req,res)=>{
    res.write('Hi from your server');
    res.end();
});
Server.listen(8082,()=>{
    console.log('Server Started');

});