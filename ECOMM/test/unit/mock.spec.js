let printNames=(n,sendEmail)=>{
    T=0;
    for(let I=0;I<5;I++)
    {
        sendEmail();
        T++;
    }
    return T;
};
describe('MOCK',()=>{
    //let delivery={passed:7,failed:3,}
    //let sendEmail=jest.fn().mockReturnValue(delivery);
    let sendEmail=jest.fn();
    test('FIRST',()=>
    {
        expect(printNames(5,sendEmail)).toBe(5);
    });
});