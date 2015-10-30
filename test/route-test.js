const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

describe('test', () => {
  it('should be ok', () => {
    const foo = 'test';
    expect(foo).to.be.a('string');
  });
});
