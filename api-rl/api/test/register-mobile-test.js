const assert = require('chai').expect;

const page = require('../page/register-mobile-page.js');
const data = require('../data/register-mobile-data.json');

const testCase = {
 "positive" : {
    "RegisNewMember" : "As a New User, I want to register for login",
    "NotSubscribe" : "As User, I want not to subscribe"
 },
  "negative" : {
     "RegisterFailed" : "User register with same email",
     "NotInputName" : "User register not input Name"
  }
}

describe(`Register Mobile Apps`, () => {

it(`@post ${testCase.positive.RegisNewMember}`, async() => {
   const response = await page.RegisterMobile(data.valid);
    assert(response.status).to.equal(400, response.body.message);
   }),

it(`@post ${testCase.negative.RegisterFailed}`, async() => {
   const response= await page.RegisterMobile(data.invalid);
   assert(response.status).to.equal(400, response.body.message);
   assert(response.body.message).to.equal('Please confirm email');
   }),

it(`@post ${testCase.negative.NotInputName}`, async() => {
   const response= await page.RegisterMobile(data.NoInputName);
   assert(response.status).to.equal(400, response.body.message);
   assert(response.body.message).to.equal('Failed to register, please contact our customer service');
   }),

it(`@post ${testCase.positive.NotSubscribe}`, async() => {
      const response= await page.RegisterMobile(data.NotSubscribe);
      assert(response.status).to.equal(200, response.body.message);
      // assert(response.body.message).to.equal('Failed to register, please contact our customer service');
   })

}) 