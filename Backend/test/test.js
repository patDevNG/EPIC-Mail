const chai = require ('chai');
const request = require('request');

const fakeData = require('../others/fakeData');

const baseURL = "http://localhost:7080/"


 cleanResp = (res)=> {
    return JSON.parse(res.body);
}
describe('signup test', ()=>{
    it('should register a new user', (done)=>{
        request.post(`${baseURL}/api/v1/auth/signup`, {
            form: {
                
                    id:fakeData.user.fakeid,
                    firstName:user.fakefirstName,
                    lastName:user.fakelastName,
                    country:fakecountry,
                    phoneNumber: fakephonenumber,
                    dateOfBirth:user.dateOfBirth,
                    gender:user.fakegender,
                    email:user.fakeemail,
                
            }
        }, (err, res, body) =>{
          chai.expect(cleanResp(res).error).equal(false);
          done();
        })
    })
})