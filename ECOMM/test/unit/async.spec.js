let promiseFunc=()=>{
    return new Promise((resolve,reject)=>{
        resolve('I Am A Promise');
        //reject('I was Rejected');
    });
};
describe('Async Js',()=>{
    test('test your promise',()=>{
        promiseFunc().then((data)=>
        {
            expect(data).toBe('I Am A Promise');
        })
        .catch((err)=>{
            expect(err).toBe('I was Rejected');
        });
    });
    test('test your async/await',async()=>{
        let output=await promiseFunc();
        expect(output).toBe('I Am A Promise');
    });
});