import is_Object from '../is-object';

describe('Test is Object', () => {
  test('Should be an object', () => {
    expect(is_Object({ a: { b: { c: 1 } } })).toBeTruthy;
  });

  test('Should not be an object', () => {
    const b = new Map();
    b.set('a', 2);

    expect(is_Object(b)).not.toBeTruthy;
    expect(is_Object('text')).not.toBeTruthy;
    expect(is_Object(2)).not.toBeTruthy;
    expect(is_Object(new Set())).not.toBeTruthy;
    expect(is_Object(Symbol('1'))).not.toBeTruthy;
  });
});
