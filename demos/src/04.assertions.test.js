// Matchers
test('test Obj', () => {
  const data = { name: 'josue' };
  data.lastname = 'quevedo';
  expect(data).toEqual({ name: 'josue', lastname: 'quevedo' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  expect('Josue').toMatch(/os/);
});

test('listas o arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
  expect(numbers).toContain(2);
});
