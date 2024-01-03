const { sum, multiply, divide } = require('./02.math');

describe('Test for Math', () => {
  describe('Test for Adds', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });

  describe('Testo for Multiply', () => {
    test('should be multiply', () => {
      const rta = multiply(4, 3);
      expect(rta).toBe(12);
    });
  });

  describe('Tests for divide', () => {
    test('should divide', () => {
      const rta = divide(18, 9);
      expect(rta).toBe(2);
    });

    test('should divide', () => {
      const rta2 = divide(6, 2);
      expect(rta2).toBe(3);
    });

    test('should divide float data', () => {
      const rta3 = divide(5, 2);
      expect(rta3).toBe(2.5);
    });

    test('should divide for zero', () => {
      const rta4 = divide(5, 0);
      expect(rta4).toBeNull();
    });
  });
});
