/* eslint-env jest */
import sum from './index';

describe('simple test', () => {
  it('1 and 1 makes 2', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
