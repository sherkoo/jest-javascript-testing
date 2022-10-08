const {makeFunction} = require('../scripts/async.js');

describe('Async function test', () => {
  test('the data is peanut butter', async () => {
    const data = await makeFunction(1);
    expect(data).toBe('it worked!');
  });
})