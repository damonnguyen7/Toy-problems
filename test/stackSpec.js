var expect = require('chai').expect;
var Stack = require('../stack.js').Stack;
var SetOfStacks = require('../stack.js').SetOfStacks;


describe('Stack', function() {
  var myStack;

  beforeEach(function() {
    myStack = new Stack;
  });

  it('should be a function', function() {
    expect(typeof Stack).to.equal('function');
  });

  it('should have properties: stack, stackSize, stackMin, currentMin', function () {
    expect(myStack).to.have.property('stack');
    expect(myStack).to.have.property('stackSize');
    expect(typeof myStack.stackSize).to.equal('number');
    expect(myStack).to.have.property('stackMin');
    expect(Array.isArray(myStack.stackMin)).to.equal(true);
    expect(myStack).to.have.property('currentMin');
  });

  it('should have methods: push, pop, length, peek, isEmpty', function() {
    expect(myStack).to.have.property('push');
    expect(myStack).to.have.property('pop');
    expect(myStack).to.have.property('min');
    expect(myStack).to.have.property('length');
    expect(myStack).to.have.property('peek');
    expect(myStack).to.have.property('isEmpty');
  });
});

describe('Stack.push', function() {
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

describe('Stack.pop', function() {
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

describe('Stack.length', function() {
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

describe('Stack.min', function() {
  var myStack;

  beforeEach(function() {
    myStack = new Stack;
  });

  it('should be a function', function() {
    expect(typeof myStack.min).to.equal('function');
  });

  it('should return 1 as the min', function() {
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    expect(myStack.min()).to.equal(1);
  });

  it('should return 3 as the min', function() {
    myStack.push(7);
    myStack.push(8);
    myStack.push(3);
    expect(myStack.min()).to.equal(3);
  });

  it('Stack.stackMin.length should equal 4', function() {
    myStack.push(7);
    myStack.push(8);
    myStack.push(9);
    myStack.push(5);
    myStack.push(1);
    myStack.pop();
    expect(myStack.stackMin.length).to.equal(4);
  });

  it('should return 7 as the min', function() {
    myStack.push(7);
    myStack.push(8);
    myStack.push(9);
    myStack.push(5);
    myStack.push(1);
    expect(myStack.min()).to.equal(1);
    myStack.pop();
    expect(myStack.min()).to.equal(5);
    myStack.pop();
    expect(myStack.min()).to.equal(7);
    myStack.pop();
    expect(myStack.min()).to.equal(7);
    myStack.pop();
    expect(myStack.min()).to.equal(7);
  });
});

describe('peek', function() {
  var myStack;

  beforeEach(function() {
    myStack = new Stack;
  });

  it('should be a function', function() {
    expect(typeof myStack.peek).to.equal('function');
  });

  it('should notify users if the stack is empty', function() {
    var notification = 'The stack is currently empty';
    expect(myStack.peek()).to.equal(notification);
  });

  it('should return the value on the top of the stack', function() {
    for (var i = 1; i <= 5; i++) {
      myStack.push(i);
    }
    expect(myStack.peek()).to.equal(5);
  });
});

describe('isEmpty', function() {
  var myStack;

  beforeEach(function() {
    myStack = new Stack;
  });

  it('should be a function', function() {
    expect(typeof myStack.isEmpty).to.equal('function');
  });

  it('should return a boolean depending if the stack is empty', function() {
    expect(myStack.isEmpty()).to.equal(true);
    myStack.push(1);
    expect(myStack.isEmpty()).to.equal(false);
    myStack.pop();
    expect(myStack.isEmpty()).to.equal(true);
  });
});

//################################SetOfStacks####################################

describe('SetOfStacks', function() {
  var mySetOfStacks;

  beforeEach(function() {
    mySetOfStacks = new SetOfStacks;
  });

  it('should be a function', function() {
    expect(typeof SetOfStacks).to.equal('function');
  });

  it('should have properties: stack, stackSize, threshold', function() {
    expect(mySetOfStacks).to.have.property('stack');
    expect(mySetOfStacks).to.have.property('stackSize');
    expect(mySetOfStacks).to.have.property('threshold');
  });

  it('should have methods: push, pop, length', function() {
    expect(mySetOfStacks).to.have.property('push');
    expect(mySetOfStacks).to.have.property('pop');
    expect(mySetOfStacks).to.have.property('length');
    expect(mySetOfStacks).to.have.property('popAt');
  });
});

describe('SetOfStacks.push', function() {
  var mySetOfStacks;

  beforeEach(function() {
    mySetOfStacks = new SetOfStacks;
  });

  it('should be a function', function() {
    expect(typeof mySetOfStacks.push).to.equal('function');
  });

  it('should throw an error if input stack is greater than 20', function() {
    var error = 'argument stack must be less or equal to 20';
    var myStack = new Stack();
    for (var i = 1; i <= 21; i++) {
      myStack.push(i);
    }
    expect(mySetOfStacks.push(myStack)).to.equal(error);
  });

  it('should push a stack that is less than or equal to 20', function() {
    var myStack = new Stack();
    for (var i = 1; i <= 20; i++) {
      myStack.push(i);
    }
    mySetOfStacks.push(myStack);
    expect(mySetOfStacks.length()).to.equal(1);
  });
});

describe('SetOfStacks.pop', function() {
  var mySetOfStacks;

  beforeEach(function() {
    mySetOfStacks = new SetOfStacks;
  });

  it('should be a function', function() {
    expect(typeof mySetOfStacks.pop).to.equal('function');
  });

  it('should be the length of 0 after popping 5 times', function() {
    var dummyStack = {
      length: function() {
        return 20;
      }
    };

    for (var j = 1; j <= 5; j++) {
      mySetOfStacks.push(dummyStack);
    }
    expect(mySetOfStacks.length()).to.equal(5);

    for (var i = 1; i <= 5; i++) {
      mySetOfStacks.pop();
    }
    expect(mySetOfStacks.length()).to.equal(0);
  });

  it('stack size should be a minimum on 0', function() {
    for (var i = 1; i <= 5; i++) {
      mySetOfStacks.pop()
    }
    expect(mySetOfStacks.length()).to.equal(0);
  });

  it('should notify users if there is nothing left to pop', function() {
    var notification = 'no more item on stack!';
    expect(mySetOfStacks.pop()).to.equal(notification);
  });

  it('should return the stack that it is popping', function() {
    var dummyStack = {
      length: function() {
        return 20;
      }
    };

    mySetOfStacks.push(dummyStack);

    expect(mySetOfStacks.pop()).to.deep.equal(dummyStack);
  });
});

describe('SetOfStacks.popAt', function() {
  var mySetOfStacks;

  beforeEach(function() {
    mySetOfStacks = new SetOfStacks;
  });

  it('should be a function', function() {
    expect(typeof mySetOfStacks.popAt).to.equal('function');
  });

  it('should take in a number as an argument or throw error', function() {
    var error = 'argument must be a number';
    expect(mySetOfStacks.popAt('string')).to.equal(error);
    expect(mySetOfStacks.popAt({})).to.equal(error);
    expect(mySetOfStacks.popAt([])).to.equal(error);
    expect(mySetOfStacks.popAt(function(){})).to.equal(error);
    expect(mySetOfStacks.popAt(undefined)).to.equal(error);
  });
  //TEST IS FAILING:
  it('should pop operation on a specic sub-stack', function() {
    for (var i = 0; i <= 4; i++) {
      var dummyStack = {
        id: i,
        length: function() {
          return 20;
        }
      }
      mySetOfStacks.push(dummyStack);
    }

    expect(mySetOfStacks.popAt(3)).to.deep.equal({id: 3, length: function() {return 20;}});
    expect(mySetOfStacks.popAt(1)).to.deep.equal({id: 1, length: function() {return 20;}});
  });
});