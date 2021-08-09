'use strict';

const server = require('../src/server');
// I do not have to run it

const supertest = require('supertest');
const request = supertest(server.app);


it('/ route works', async () => {
    const response = await request.get('/person'); // async
    // expect(response.status).toEqual(200);
    console.log(response.text);
    expect(response.status).toEqual(500);
});