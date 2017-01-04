var expect = require('chai').expect;
var spaceCode = require('../spaceCode');
var error = 'Please Input String Type Data';

describe('spaceCode', function() {
  it('should be a function', function() {
    expect(typeof spaceCode).to.equal('function');
  });

  it('should throw error if input is not a string', function() {
    expect(spaceCode(7)).to.equal(error);
    expect(spaceCode([])).to.equal(error);
    expect(spaceCode({})).to.equal(error);
    expect(spaceCode(null)).to.equal(error);
    expect(spaceCode(undefined)).to.equal(error);
  });

  it('should return a string', function() {
    expect(typeof spaceCode('Happy New Year!')).to.equal('string');
    expect(spaceCode('Happy New Year!')).to.equal('Happy%20New%20Year!');
    expect(spaceCode('I am cool!')).to.equal('I%20am%20cool!');
    expect(spaceCode('woot woot')).to.equal('woot%20woot');
  });
});