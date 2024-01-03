describe('Group 1', () => {
  beforeAll(() => {
    // console.log('beforeAll para todos');
    /*
    Podemos usar beforeAll para preparar el entorno para los test,
    como por ejemplo levantando una conexión a una base de datos
    */
  });

  afterAll(() => {
    // console.log('Ejecutando afterAll para todos');
    /*
    Los after All se ejecutan al concluir el describe que los contiene o en su caso, los describe
    hijos que contenga
    */
  });

  beforeEach(() => {
    // console.log('Ejecutando beforeEach para todos');
    /*
    Los beforeEach se ejecutan antes de cada test individual
    */
  });

  afterEach(() => {
    // console.log('Ejecutando afterEach para todos');
    /*
    Los afterEach se ejecutan despues de la ejecución de cada test individual
    */
  });

  test('case 1', () => {
    // console.log('Caso 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    // console.log('Caso 2');
    expect(1 + 3).toBe(4);
  });

  describe('Group 2', () => {
    beforeAll(() => {
      // console.log('beforeAll solo para grupo 2');
      /*
      El scope de un beforeAll es dentro del describe donde fue declarado
      y aplica tambien para los elementos y describes hijos, pero no para
      los describes padre.
      */
    });

    afterAll(() => {
      // console.log('Ejecutando afterAll del grupo 2');
      /*
      Éste afterAll será ejecutado al finalizar el describe del grupo 2
      */
    });

    test('case 3', () => {
      // console.log('Caso 3');
      expect(1 + 10).toBe(11);
    });
    test('case 4', () => {
      // console.log('Caso 4');
      expect(1515151515n + 3n).toBe(1515151518n);
    });
  });
});
