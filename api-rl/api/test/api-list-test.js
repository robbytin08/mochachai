const assert = require('chai').expect;

const page = require('../page/api-list-page.js');

const testCase = {
 "positive" : {
    "getList" : "As a User, I want to show Product Populer",
 },
}

describe(`Get Product Populer`, () => {

 it(`@get ${testCase.positive.getList}`, async() => {
  const response = await page.getProductPopuler();
  assert(response.status).to.equal(200);
 })
}) 