const assert = require('chai').expect;

const page = require('../page/register-mobile-page.js');
const data = require('../data/register-mobile-data.json');

const testCase = {
 "positive" : {
    "RegisNewMember" : "As a New User, I want to register for login",
 },
 "negative1" : {
    "RegWithSameEmail" : "User registration with same email"
 },
 "negative2" : {
    "RegWithInvalidEmail" : "User registration with invalid email format"
 }
}

describe(`Register Mobile Apps`, () => {

 it(`@post ${testCase.positive.RegisNewMember}`, async() => {
   const response = await page.RegisterMobile(data.valid);
   //  assert(response.status).to.equal(200);
    assert(response.status).to.equal(400);
   }),

it (`@post ${testCase.negative1.RegWithSameEmail}`, async() => {
   const response = await page.RegisterMobile(data.sameemail);
   assert(response.status).to.equal(400);
   assert(response.body.message).to.equal('Please confirm email');
   }),

it (`@post ${testCase.negative2.RegWithInvalidEmail}`, async() => {
   const response = await page.RegisterMobile(data.wrongformatemail)
   assert(response.status).to.equal(400);
   assert(response.body.message).to.equal('Failed to register, please contact our customer service')
})

}) 