const assert = require('chai').expect;

const page = require('../page/api-pruduct-list-page.js');

const testCase = {
 "positive" : {
    "getProduct" : "As a User, I want to show Product Home",
 },
}

describe(`Get Product Home`, () => {

 it(`@get ${testCase.positive.getProduct}`, async() => {
   const response = await page.getProductHome();
    assert(response.status).to.equal(200);
   })

}) 