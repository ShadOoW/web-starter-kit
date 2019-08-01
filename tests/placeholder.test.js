/* eslint-env jest */
let value = false;

describe('Dummy test', () => {
  beforeEach(() => {
    value = true;
  });

  it('Should contain name', () => {
    expect(value).toBe(true);
  });
});
