const { esPar } = require('../index');

describe('Función esPar', () => {
  test('devuelve true para números pares', () => {
    expect(esPar(2)).toBe(true);
    expect(esPar(4)).toBe(true);
    expect(esPar(6)).toBe(true);
  });

  test('devuelve false para números impares', () => {
    expect(esPar(1)).toBe(false);
    expect(esPar(3)).toBe(false);
    expect(esPar(5)).toBe(false);
  });

  test('devuelve true para cero', () => {
    expect(esPar(0)).toBe(true);
  });

  test('devuelve true para números negativos pares', () => {
    expect(esPar(-2)).toBe(true);
    expect(esPar(-4)).toBe(true);
    expect(esPar(-6)).toBe(true);
  });

  test('devuelve false para números negativos impares', () => {
    expect(esPar(-1)).toBe(false);
    expect(esPar(-3)).toBe(false);
    expect(esPar(-5)).toBe(false);
  });
});
