const {mockRequest,mockResponse}=require('./../interceptor');
const db=require('./../../../model');
const categoryController=require('./../../../controller/category.controller');
describe('Category Controller',()=>{
    let req,res;
    beforeEach(()=>{
        req=mockRequest();
        res=mockResponse();
    });
    let allCategories=[
        {
            id:1,
            name:'Fashion',
        },
        {
            id:2,
            name:'Books',
        },
    ];
    it('Should Test The getAllCategories Method',async()=>{
        let spy=jest.spyOn(db.categories,'findAll')
    .mockImplementation(()=>
        new Promise((resolve,reject)=>{
            resolve(allCategories);
        })
    );
        await categoryController.getAllCategories(req,res);
        expect(spy).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(allCategories);
    });


});