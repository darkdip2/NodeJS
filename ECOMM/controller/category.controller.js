let Categories=require('./../model/category');
let sequelizeInstance=require('./../config/db.Config');
//expressApp.use(bodyParser.json());
let getAllCategories=async(req,res,next)=>
{
    let categories=await Categories.findAll();
    //res.writeHead(200,{'Content-Type':'application/json'});
    res.send(JSON.stringify(categories));
    res.end();
}
//UI=>route=>controller=>model=>sqlconnection
let getCategorybyId=async (req,res,next)=>
{
    let id=req.params.categoryId;
    if(!id){res.status(400).send('ID not passed')}
    let categories=await Categories.findAll({
        where:{id:id,},
    });
    res.writeHead(200,{'Content-type':'application/json'})
    res.write(JSON.stringify(categories));
    res.end();
}
let addNewCategory=async(req,res,next)=>
{
    let category=req.body;
        await Categories.create({
            name:category.name
        });
        res.status(201).send('Data Added');
    /*
    try{}
    catch(err)
    {//Default HTML page by express
        next(err);
    //res.status(400).send('Something Went Wrong');
    }
    finally{res.end();}
    */
}
let deleteCategoryById=async(req,res,next)=>
{
    let id=req.params.categoryId;
    await Categories.destroy({
        where:{id:id}
    });
    res.status(200).send('Category Deleted');
    res.end();
}
let updateCategoryById=async(req,res,next)=>
{
    /*
    if(!req.body.name)
    {
        res.status(500).send('Please Pass Category Name');
        res.end();
    }
    */
    let id=req.params.categoryId;
    let categoryToUpdate={
        name:req.body.name
    };
    await Categories.update(categoryToUpdate,
        {
            where :{id:id}
        });
    let updateCategory=await Categories.findByPk(id);
    res.status(200).send(updateCategory);
    res.end();
}
let all={
    getAllCategories,
    getCategorybyId,
    addNewCategory,
    deleteCategoryById,
    updateCategoryById
};
//createTable();
module.exports=all