const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.RLL_BASE_URL);

const getProductPopuler = (payload) => api.get('/api/mobile/v1/product/popular')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .send(payload);

module.exports = {
    getProductPopuler,
}