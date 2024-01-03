function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : null;
}

module.exports = {
  sum,
  multiply,
  divide,
};
