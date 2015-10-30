var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('test', () => {
  it('should be ok', () => {
    var foo = 'test';
    expect(foo).to.be.a('string');
  });
});
