import request from 'supertest';
import { app } from '../../app';

test('Test PingController', async () => {
  const result = await request(app).get('/ping').send();

  expect(result.status).toBe(200);
  expect(result.body.data).toBe('Pong!');
});
