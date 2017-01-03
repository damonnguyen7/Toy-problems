var expect = require('chai').expect;
var removeDuplicate = require('../removeDuplicate');
var error = 'input must be a string!';

describe('removeDuplicate', function() {
  it('should be a function', function() {
    expect(typeof removeDuplicate).to.equal('function');
  });

  it('should only take string as input or return error', function() {
    expect(removeDuplicate(5)).to.equal(error);
    expect(removeDuplicate({})).to.equal(error);
    expect(removeDuplicate([])).to.equal(error);
    expect(removeDuplicate(function(){})).to.equal(error);
    expect(removeDuplicate(undefined)).to.equal(error);
  });

  it('should be case insensitive', function() {
    expect(removeDuplicate('Aabc')).to.equal('abc')
    expect(removeDuplicate('AABCDD')).to.equal('abcd');
  });

  it('should return string of unique characters', function() {
    expect(removeDuplicate('aabc')).to.equal('abc');
    expect(removeDuplicate('aabcdd')).to.equal('abcd');
  });
});