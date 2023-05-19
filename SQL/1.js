let mysql=require('mysql');
let dbConnection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'#Password67',
        database:'myfirstdb'
    });
dbConnection.connect((err)=>{
    if(err)throw new Error(err);
    console.log('Connection succesful');
    dbConnection.query('select * from products',(err,data)=>{
        if(err)throw err;
        console.log(data);
    })
});