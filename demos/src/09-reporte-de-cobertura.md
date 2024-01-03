# Reporte de cobertura

## Concepto

Es una medida porcentual que nos indica cuanto nos falta probar de nuestro código.

Para generar ese reporte de cobertura usando `jest` usamos el comando:

```bash
npm jest -- --coverage
```

A lo que obtendremos un reporte similar al siguiente:

```text
npm run test -- --coverage

> demos@1.0.0 test
> jest --coverage

 PASS  src/04.assertions.test.js
 PASS  src/02.math.test.js
 PASS  src/06.person.test.js
 PASS  src/05.setup.test.js
 PASS  src/01.sum.test.js
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |   76.92 |    76.92 |     100 |   76.92 |
 01.sum.js    |     100 |      100 |     100 |     100 |
 02.math.js   |     100 |      100 |     100 |     100 |
 06.person.js |      70 |       75 |     100 |      70 | 11,17,19,22-25
--------------|---------|----------|---------|---------|-------------------

Test Suites: 5 passed, 5 total
Tests:       19 passed, 19 total
Snapshots:   0 total
Time:        0.555 s, estimated 1 s
Ran all test suites.
``````
