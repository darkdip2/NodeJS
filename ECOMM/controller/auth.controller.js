const db=require('./../model/index');
const config=require('./../config/auth.config');
//const config=require('./../config/auth.config');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const sequelize=require('sequelize');
const User=db.user;
const Roles=db.roles;
let signup=async(req,res)=>{
    let userName=req.body.username;
    let email=req.body.email;
    let password=req.body.password;
    let user=await User.create(
        {
            username:userName,
            email:email,
            password:bcrypt.hashSync(password,8),
        },
    );
    if(req.body.roles)
    {
        let roles=await Roles.findAll({
            where:{
                name:{[sequelize.Op.or]:req.body.roles,},
            },
        });
        await user.setRoles(roles);
        res.status(200).json({
            message:'User Registered Successfully',
        });
    }
    else 
    {
        await user.setRoles([1]);
        res.status(200).json({
            message:'Registered with user role',
        },);
    }
};
let signin=async(req,res)=>{
let username=req.body.username;
let password=req.body.password;
let userName=await User.findOne({
    where:{username:username,},
});
if(!userName)
{
    //NOT FOUND 404
    res.status(404).json({
        message:'User not Found',
    });
    return;
}
let isValidPassword=bcrypt.compareSync(password,userName.password);
if(!isValidPassword)
{
    //NOT AUTHORIZED 401
    res.status(401).json({
        message:'Password is Incorrect',
    });
    rerturn;
}
var token=jwt.sign({id:userName.id},config.secret,{expiresIn:86400});
let authorities=[];
let roles=await userName.getRoles();
for(let i=0;i<roles.length;i++)
    authorities.push('ROLE '+roles[i].name.toUpperCase());
res.status(200).send({
    id:userName.id,
    username:userName.username,
    email:userName.email,
    roles:authorities,
    accessToken:token,
});
};
let all={signup,signin,};
module.exports=all;