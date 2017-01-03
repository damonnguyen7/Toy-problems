var expect = require('chai').expect;
var allUniqueCharacter = require('../allUniqueCharacter');

describe('allUniqueCharacter', function() {
  it('should be a function', function() {
    expect(typeof allUniqueCharacter).to.equal('function');
  })

  it('should return false if input is not a String', function() {
    expect(allUniqueCharacter(4)).to.equal(false);
    expect(allUniqueCharacter([])).to.equal(false);
    expect(allUniqueCharacter({})).to.equal(false);
    expect(allUniqueCharacter(function(){})).to.equal(false);
    expect(allUniqueCharacter(null)).to.equal(false);
    expect(allUniqueCharacter(undefined)).to.equal(false);
  });

  it('should return false if there are no unique character in the string', function() {
    expect(allUniqueCharacter('aa')).to.equal(false);
    expect(allUniqueCharacter('abcc')).to.equal(false);
    expect(allUniqueCharacter('abcdee')).to.equal(false);
    expect(allUniqueCharacter('abcdea')).to.equal(false);
  });

  it('should return true if all characters in the string is unqiue', function() {
    expect(allUniqueCharacter('abc')).to.equal(true);
    expect(allUniqueCharacter('abcd')).to.equal(true);
    expect(allUniqueCharacter('abcde')).to.equal(true);
    expect(allUniqueCharacter('abcdef')).to.equal(true);
    expect(allUniqueCharacter('abcdefg')).to.equal(true);
  });

  it('should not be case sensitive', function() {
    expect(allUniqueCharacter('Aa')).to.equal(false);
    expect(allUniqueCharacter('aBCc')).to.equal(false);
    expect(allUniqueCharacter('AbcdEe')).to.equal(false);
    expect(allUniqueCharacter('ABcdeA')).to.equal(false);
    expect(allUniqueCharacter('aBc')).to.equal(true);
    expect(allUniqueCharacter('AbcD')).to.equal(true);
    expect(allUniqueCharacter('abCde')).to.equal(true);
    expect(allUniqueCharacter('aBcdeF')).to.equal(true);
    expect(allUniqueCharacter('abCdefG')).to.equal(true);
  })
});