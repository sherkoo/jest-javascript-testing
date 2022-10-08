const {sum, subtract} = require('../sum.js');

test('adds numbers to be 3', () => {
  expect(sum(1,2)).toBe(3);
});


test('Subtract', () => {
  expect(subtract(3,1)).toBe(2);
});

describe('my custom test', () => {
  describe('Adding', () => {
    it('should return 3', () => {
      expect(sum(2,1)).toEqual(3);
    });
  });
  
  describe('subtracting', () => {
    it('should return 2', () => {
      expect(subtract(10,5)).toEqual(5);
    })
  });
});

// describe('in the math global object', () => {
 
//   describe('the random function', () => {
//     it('should return a number', () => {
//       expect(typeof Math.random()).toEqual('number');
//     })
//     it('should return a number between 0 and 1', () => {
//       const randomNumber = Math.random();
//       expect(randomNumber).toBeGreaterThanOrEqual(0);
//       expect(randomNumber).toBeLessThan(1);
//     })
//   });
 
//   describe('the round function', () => {
//     it('should return a rounded value of 4.5 being 5', () => {
//       expect(Math.round(4.5)).toBe(5);
//     })
//   });
// });
