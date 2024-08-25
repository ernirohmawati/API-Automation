const chai = require('chai');
const chaiJsonSchema = require('chai-json-schema');
const supertest = require('supertest');
const userSchema = require('./schema'); // Import the schema

// Menggunakan Chai dan Chai JSON Schema untuk asertivitas
chai.use(chaiJsonSchema);

const { expect } = chai;

// URL dasar dari API yang akan diuji
const BASE_URL = 'https://reqres.in/api';
const request = supertest(BASE_URL);

// Deskripsi test suite untuk API Reqres
describe('Reqres API Automation Tests', () => {
  it('Sample GET Request', async () => {
    const response = await request.get('/users/2');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.jsonSchema(userSchema); // Using chai-json-schema here
  });

  // Test case untuk HTTP POST request
  it('Sample POST Request', async () => {
    const payload = {
      name: "morpheus",
      job: "leader"
    };
    const response = await request.post('/users').send(payload);
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('name', 'morpheus');
    expect(response.body).to.have.property('job', 'leader');
  });

  // Test case untuk HTTP DELETE request
  it('Sample DELETE Request', async () => {
    const response = await request.delete('/users/2');
    expect(response.status).to.equal(204);
  });

  // Test case untuk HTTP PUT request
  it('Sample PUT Request', async () => {
    const payload = {
      name: "morpheus",
      job: "zion resident"
    };
    const response = await request.put('/users/2').send(payload);
    expect(response.status).to.equal(200); // Memeriksa status code 200
    expect(response.body).to.have.property('name', 'morpheus'); // Memeriksa properti 'name'
    expect(response.body).to.have.property('job', 'zion resident'); // Memeriksa properti 'job'
  });
});
