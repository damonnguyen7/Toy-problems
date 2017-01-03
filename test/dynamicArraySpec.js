var expect = require('chai').expect;
var dynamicArray = require('../dynamicallyResizingArray');

describe('dynamicArray function', function() {
  it('should exist', function() {
    expect(require('../dynamicallyResizingArray')).to.be.defined;
  })

  it('should be a function', function() {
    expect(typeof dynamicArray).to.equal('function');
  });

  it('should return return an array return an array', function() {
    expect(Array.isArray(dynamicArray([1,2,3]))).to.equal(true);
  });

  it('should return null if array is not defined as a the first parameter', function() {
    expect(dynamicArray(1)).to.equal(null);
    expect(dynamicArray('string')).to.equal(null);
    expect(dynamicArray(function(){})).to.equal(null);
    expect(dynamicArray({})).to.equal(null);
  });

  it('should not recieve null as second parameter', function() {
    expect(dynamicArray([1,2,3], null)).to.equal(null);
  });

  it('should double in size when vector is full', function(){
    expect(dynamicArray([1,2,3]).length).to.equal(6);
    expect(dynamicArray([1,2,3,4]).length).to.equal(8);
    expect(dynamicArray([1,2,3,4,5]).length).to.equal(10);
    expect(dynamicArray([1,2,3,4,5,6]).length).to.equal(12);
    expect(dynamicArray([1,2,3,4,5,6,7]).length).to.equal(14);
    expect(dynamicArray([1,2,3,4,5,6,7,8]).length).to.equal(16);
    expect(dynamicArray([1,2,3,4,5,6,7,8, 9]).length).to.equal(18);
    expect(dynamicArray([1,2,3,4,5,6,7,8, 9,10]).length).to.equal(20);
  });

  it('should not double in size if vector is not full', function() {
    expect(dynamicArray([1,2,null]).length).to.equal(3);
    expect(dynamicArray([1,2,3,null]).length).to.equal(4);
    expect(dynamicArray([1,2,3,4,null]).length).to.equal(5);
  });

  it('should be able to value of input to next availible spot', function() {
    expect(dynamicArray([1,2,3], 4)).to.deep.equal([1,2,3,4,null,null,null,null]);
    expect(dynamicArray([1,2,3,4], 5)).to.deep.equal([1,2,3,4,5,null,null,null,null,null]);
    expect(dynamicArray([1,2,3,4,5], 6)).to.deep.equal([1,2,3,4,5,6,null,null,null,null,null,null]);
    expect(dynamicArray([1,2,3,4,5,6,7], 8)).to.deep.equal([1,2,3,4,5,6,7,8,null,null,null,null,null,null,null,null]);
  });
});