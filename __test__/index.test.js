const app = require('../index')
const request = require('supertest')

describe('other Endpoint', () => {
    it('should access api root', async () => {
        const res = await request(app).get(`/`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });
    it('should cannot access other endpoint, if accessed get 404', async () => {
        const res = await request(app).get(`/mamamiama`);
        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('message');
    });
});

