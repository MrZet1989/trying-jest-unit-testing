//тест для моей задачи
const arrsum = require('../arr.test.sum/arrsum');
const positiveSum = arrsum.positiveSum;
const nativeNull = arrsum.nativeNull;

describe('My operator testing', () => {
  describe('Simple operation', () => {
    test('positiveSum', () => {
      expect(positiveSum([-1,-2,-3,-4,-5])).toBe(0);
      expect(positiveSum([])).toBeGreaterThanOrEqual(0);
      expect(positiveSum([1,2,3,4,5])).toBe(15);
      expect(positiveSum([1,-2,3,4,5])).toBe(13);
      expect(positiveSum([-1,2,3,4,-5])).toBe(9);
    });
  });
  describe('Native null: ', () => {
    test('return false value null', () => {
      expect(nativeNull()).toBe(null);
    });
  });
});
