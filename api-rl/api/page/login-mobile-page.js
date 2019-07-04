const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.RLL_BASE_URL);

const LoginMobile = (loginM) => api.post('/api/mobile/v1/user/login')
 .set('Accept', 'application/json')
 .set('Content-Type', 'application/json')
 .set('x-key', '20151020052357')
 .set('x-secret','75325002011502')
 .set('x-user-agent', 'Ralali-Android')
 .send(loginM);
// .query({email : Email, password : Pwd, name : Username, subscribe_news : Subscribe})

module.exports = {
    LoginMobile,
}