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

  it('should have properties: stack, stackSize', function () {
    expect(myStack).to.have.property('stack');
    expect(myStack).to.have.property('stackSize');

  });

  it('should have methods: push, pop, length', function() {
    expect(myStack).to.have.property('push');
    expect(myStack).to.have.property('pop');
    expect(myStack).to.have.property('length');
  });
});

describe('push', function() {
  var myStack;

  beforeEach(function() {
    myStack = new Stack;
  });

  it('should only take strings and numbers as argument or throw error', function() {
    var error = 'argument must be string or number';
    expect(myStack.push({})).to.equal(error);
    expect(myStack.push([])).to.equal(error);
    expect(myStack.push(function(){})).to.equal(error);
    expect(myStack.push(undefined)).to.equal(error);
    expect(myStack.push(null)).to.equal(error);
  });

  it('should have length 3 after pushing 3 values on to the stack', function() {
    myStack.push('a');
    myStack.push('b');
    myStack.push('c');
    expect(myStack.length()).to.equal(3);
  });

  it('should return the stack after pushing', function() {
    expect(myStack.push('a')).to.deep.equal({0: 'a'});
    expect(myStack.push('b')).to.deep.equal({0: 'a', 1: 'b'});
    expect(myStack.push('c')).to.deep.equal({0: 'a', 1: 'b', 2: 'c'});
  });
});

describe('pop', function() {
  var myStack;

  beforeEach(function() {
    myStack = new Stack;
  });

  it('should be a function', function() {
    expect(typeof myStack.pop).to.equal('function');
  });

  it('should have the length of 2 after pop function is invoked', function() {
    myStack.push('a');
    myStack.push('b');
    myStack.push('c');
    expect(myStack.length()).to.equal(3);
    myStack.pop();
    expect(myStack.length()).to.equal(2);
  });

  it('should return the value that is being popped off', function() {
    myStack.push('a');
    myStack.push('b');
    myStack.push('c');
    expect(myStack.pop()).to.equal('c');
    expect(myStack.pop()).to.equal('b');
    expect(myStack.pop()).to.equal('a');
  });

  it('stack size should be a minimum on 0', function() {
    myStack.pop();
    myStack.pop();
    myStack.pop();
    expect(myStack.length()).to.equal(0);
  });

  it('should notify users if there is nothing left to pop', function() {
    var notification = 'no more item on stack!';
    expect(myStack.pop()).to.equal(notification);
  });
});

describe('length', function() {
  var myStack;

  beforeEach(function() {
    myStack = new Stack;
  });

  it('should be a function', function() {
    expect(typeof myStack.length).to.equal('function');
  });

  it('should return the length of 5', function() {
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.push(4);
    myStack.push(5);
    expect(myStack.length()).to.equal(5);
  });
});