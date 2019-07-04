const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.RLL_BASE_URL);

const getBusinessProfile = (key, accessToken) => api.get('/api/v4/users/buyer-profile-sections')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .set(key, accessToken)

module.exports = {
    getBusinessProfile,
}