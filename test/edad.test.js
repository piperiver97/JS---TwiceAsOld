import { describe, it, expect } from 'vitest';
import { dobleEdad } from '../src/js/dobleEdad';

describe('dobleEdad', () => {
  it('calcula en cuántos años el padre tendrá el doble de edad del hijo o cuántos años han pasado desde que tuvo el doble', () => {
    expect(dobleEdad(36, 7)).toBe(22);
    expect(dobleEdad(55, 30)).toBe(5);
    expect(dobleEdad(42, 21)).toBe(0);
    expect(dobleEdad(22, 1)).toBe(20);
    expect(dobleEdad(29, 0)).toBe(29);
  });
});
