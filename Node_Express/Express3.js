let express=require('express');
let expressApp=express();
let bodyParser=require('body-parser');
let Users=
[
    {
        Name:'ABCD',
        Id:32
    },
    {
        Name:'CDEF',
        Id:40
    }
];
expressApp.use(bodyParser.json());
/*
expressApp.get('/',(req,res)=>{
    res.json(Users);
    //res.send(Users).status(200);
    res.end();
});
*/
expressApp.get('/',(req,res)=>{
    res.send('This Is Base Route').status(200);
    res.end();
})
expressApp.get('/user',(req,res)=>{
    res.send(Users).status(200);
    res.end();
});
/*
//REDIRECT
expressApp.get('/user',(req,res)=>{
    res.redirect('/user/32');
});
*/
expressApp.get(/^\/user\/(\d+)$/,(req,res)=>{
    let searchedUser=Users.find((user)=>{
        return user.Id==req.params[0]
    });
    res.send(searchedUser).status(200);
    res.send();
});
expressApp.post('/user',(req,res)=>{
    const User=req.body;
    let UserId=User.Id;
    let AlreadyAdded=Users.find((User)=>{
        return User.Id==UserId;
    })
    if(AlreadyAdded)
    {
        res.send('User Already Exists').status(400);
        return ;
    }
    Users.push(User);
    res.send('User Added').status(200);
    res.end();
});
expressApp.delete('/user/:userId',(req,res)=>{
    let UserToDelete=req.params.userId;
    Users=Users.filter((User)=>{
        return User.Id!=UserToDelete;
    });
    res.send('User Deleted').status(200);
    res.end();
});
expressApp.use(express.static('html'));
expressApp.get('/',(req,res)=>{
    res.sendFile('index.html');
});
expressApp.listen(8082,()=>{
    console.log('Server Up And Running');
});
