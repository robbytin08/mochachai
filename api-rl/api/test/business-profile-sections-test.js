const assert = require('chai').expect;

const page = require('../page/business-profile-sections-page.js');

const testCase = {
 "positive" : {
    "getInfo" : "As a User, I want to be able to get Business Profile list",
 },
 "negative" :{
    "ExpiredAccessToken" : "As a User, I should got error message when I send request with Expired Access Token",
    "WithoutAccessToken" : "As a User, I should got error message when I send request without Access Token"
 },
}

describe(`Get Info`, () => {
const apiKey = "x-access-token";
const token = "655ad699358b58bb4bd1fc6bc6364154";
const expiredToken = "eEW521bc7995a25c09407bd6ae901ec8b3498cbb787522a5df8217960ab24708f009f-_-B0ZEzORMa";


 it(`@get ${testCase.positive.getInfo}`, async() => {
   const response = await page.getBusinessProfile(apiKey, token);
    assert(response.status).to.equal(200);
    assert(response.body.sections != null);
    assert(response.body.sections).to.be.an('array');
    assert(response.body.sections!= null);
   })

 it(`@get ${testCase.negative.WithoutAccessToken}`, async() => {
   const response = await page.getBusinessProfile(apiKey, "");
   assert(response.status).to.equal(401);
    assert(response.body.sections[0].name_eng).to.equal('Document');
   
   })

 it(`@get ${testCase.negative.ExpiredAccessToken}`, async() => {
   const response = await page.getBusinessProfile(apiKey, expiredToken);
   assert(response.status).to.equal(403);
   assert(response.body.errors.code).to.equal(98);
   assert(response.body.errors.label).to.equal("authenticity_error");
   assert(response.body.errors.message).to.equal("Invalid access token code"); 
   })
}) 