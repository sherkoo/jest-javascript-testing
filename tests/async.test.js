const { makeFunction } = require('../scripts/async.js');

describe('Async function test', () => {

  describe('first async test', () => {
    test('should equal it worked', async () => {
      const data = await makeFunction(1);
      expect(data).toBe('it worked!');
    });

    test('should be less than 3', async () => {
      const data = await makeFunction(1);
      expect(data).toContain('it');
    });

    test('this test should fail', async () => {
      const data = await makeFunction(1);
      expect(data).toBe('it worked!1');
    });
  });

});