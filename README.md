# Learning Jest testing
- A simple repo looking at different examples testing with Jest

## Quick setup
`$npm install`

## Add to package.json (already included)
```javascript
"scripts": {
  "test": "jest --watchAll"
},
```

## Running the test
run `$npm test`

## How Jest recognizes test files
- Name files with `.test.js` in the file name
- For example `sum.test.js`

## Different types of Jest methods
- `expect(n).toBe()`
- `expect(n).toBeNull();`
- `expect(n).toBeDefined();`
- `expect(n).not.toBeUndefined();`
- `expect(n).not.toBeTruthy();`
- `expect(n).toBeFalsy();`
- `expect(value).toBeGreaterThan(3);`
- `expect(value).toBeGreaterThanOrEqual(3.5);`
- `expect(value).toBeLessThan(5);`
- `expect(value).toBeLessThanOrEqual(4.5);`
- `expect(shoppingList).toContain('milk');`

## Testing async functions
```javascript
const {makeFunction} = require('../scripts/async.js');

test('the data is peanut butter', async () => {
  const data = await makeFunction(1);
  expect(data).toBe('it worked!');
});
```