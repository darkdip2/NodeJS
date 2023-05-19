let Categories=require('./../model/category');
const validateReqForCategoryName=async(req,res,next)=>
{
    if(!req.body.name)
    {
        res.status(400).send({message:'Category Name Is Required'});
        return;
    }
    next();
}
const validateReqForCategoryId=async(req,res,next)=>
{
    let categoryId=req.params.categoryId;
    if(categoryId)
    {
        try
        {
            let category=await Categories.findByPk(categoryId);
            if(!category)
            {
                res.status(400).send({
                    message:'Category Does Not Exist'
                });
                return;
            }
            next();
        }
        catch(err)
        {
            res.status(500).send({
                message:" Inernal Error"
            });
            return;
        }
    }
    else
    {
        res.status(400).send({
            message:'Category Id Is Missing'
        });
    }
}
let all={
    validateReqForCategoryName,
    validateReqForCategoryId
};
module.exports=all