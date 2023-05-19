let Users=require('./../model/Users');
async function GetAllUsers()
{
    let users=await Users.findAll(
        {
            where:{
                email:'vdsfgv@gmail.com'
            }
        }
    );
    console.log(JSON.stringify(users));
}
GetAllUsers();