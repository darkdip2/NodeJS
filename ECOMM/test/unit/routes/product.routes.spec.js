const db=require('./../../../model');
const request=require('supertest');
const app=require('./../../../app');
const api_v1_endpoint='/products';
describe('Product routes',()=>{
    it('SHOULD Test My Get Route',async()=>{
        const res=await request(app)
        .get(api_v1_endpoint);
        expect(res.statusCode).toEqual(401);
    });
});