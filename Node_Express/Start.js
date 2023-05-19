console.log("Introduction To NodeJS");
//for(let I=0;I<5;I++)console.log(I);
let Promise1=new Promise((Resolve,Reject)=>
{
    setTimeout(()=>{Resolve("Promise Resolved")},2000);
})
Promise1.then((D)=>console.log(D));
function *Generator()
{
    yield 2;
    yield 2*5;
    yield 25;
    yield 32;
    return 5;
}
let It=Generator();
for(let I=0;I<5;I++)
{
    console.log(It.next().value);
}