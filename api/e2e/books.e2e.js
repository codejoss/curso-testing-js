const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URL = config.dbUrl;

describe('Test for Books', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await database.dropDatabase();
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1987,
          author: 'Da Vinci',
        },
        {
          name: 'Book2',
          year: 2000,
          author: 'Raphaelo',
        },
      ]);

      console.log(seedData);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Asserter
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
