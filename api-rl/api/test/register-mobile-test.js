const assert = require('chai').expect;

const page = require('../page/register-mobile-page.js');
const data = require('../data/register-mobile-data.json');

const testCase = {
 "positive" : {
    "RegisNewMember" : "As a New User, I want to register for login",
 },
 "negative" : {
    "RegWithEmptyEmail" : "User registration with empty email"
 }
}

describe(`Register Mobile Apps`, () => {

 it(`@post ${testCase.positive.RegisNewMember}`, async() => {
   const response = await page.RegisterMobile(data.valid);
   //  assert(response.status).to.equal(200);
    assert(response.status).to.equal(400);
   }),

it (`post ${testCase.negative.RegWithEmptyEmail}`, async() => {
   const response = await page.RegisterMobile(data.invalid);
   assert(response.status).to.equal(200);
})

}) 