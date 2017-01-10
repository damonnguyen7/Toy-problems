var expect = require('chai').expect;
var Stack = require('../stack.js');

describe('stack', function() {
  var myStack;

  beforeEach(function() {
    myStack = new Stack;
  });

  it('should be a function', function() {
    expect(typeof Stack).to.equal('function');
  });

  it('should have methods: push, pop, length, showStack', function() {
    expect(myStack).to.have.property('push');
    expect(myStack).to.have.property('pop');
    expect(myStack).to.have.property('length');
    expect(myStack).to.have.property('showStack');
  });
});

