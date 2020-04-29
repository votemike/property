import { round } from '../../src/helpers';

test('Rounding to 2DP', () => {
  expect(round(1)).toBe(1.00);
  expect(round(1.005)).toBe(1.01);
});
