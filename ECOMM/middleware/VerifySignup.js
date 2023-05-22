let db=require('./../model/index');
const Roles=db.Roles;
const User=db.user;
let checkDuplicateUserName=async(req,res,next)=>
{
    let userName=req.body.username;
    let user=await User.findOne({
        where:{username:userName}
    });
    if(user){
        res.status(400).json({message:'User already exists',});
        return;
    }
    next();
}
let checkRolesExisted=(req,res,next)=>{
    if(req.body.roles)
    {
        for(let I=0;I<req.body.roles.length;I++)
        {
            if(!Roles.includes(req.body.roles[I]))
                {
                    res.status(400).send({
                        message:'Failed! Role Does Not Exist ='+req.body.roles[I],
                    });
                    return;
                }
        }
    }
    next();
}
let all={checkDuplicateUserName,checkRolesExisted};
module.exports=all;