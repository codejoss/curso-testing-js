const Person = require('./06.person');

describe('Test for Person', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('Josue', 108, 1.75);
  });

  test('should return overweight level 2', () => {
    person.weight = 108;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('overweight level 2');
  });

  test('should return down', () => {
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
