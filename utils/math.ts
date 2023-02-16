export function add(a: number, b: number) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('pass only numbers');
  }
  return a + b;
}
