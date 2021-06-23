const request = require('supertest')
const app = require('../index')

describe('People Endpoint', () => {
    it.only('should create a new people', async () => {
        const res = await request()
            .post('/peoples')
            .send(
                {
                    "id": 400,
                    "first_name": "Sarrif",
                    "last_name": "asden",
                    "age": 39,
                    "adress": "bandung"
                }
            );
        console.log(res.body)
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id', 'first_name', 'last_name', 'age', 'adress');

    });

    it('should fetch a single people', async () => {
        const peopleId = 3;
        const res = await request(app).get(`/peoples/${peopleId}`);
        console.log(res.body)
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', 'first_name', 'last_name', 'age', 'adress');

    });

    it('should fetch all people', async () => {
        const res = await request(app).get('/peoples');
        expect(res.statusCode).toEqual(200);
    });

    it('should delete a people', async () => {
        const res =  await request(app).delete('/peoples/109');
        console.log(res.body)
        expect(res.statusCode).toEqual(204);
    })

});
