var expect = require('chai').expect;
var linkedList = require('../linkedlist');

describe('linkedList', function() {
  it('should be a function', function() {
    expect(typeof linkedList.LinkedList).to.equal('function');
  });
});

describe('Node', function() {
  it('should be a function', function() {
    expect(typeof linkedList.Node).to.equal('function');
  });

  it('should instantiate a node', function() {
    var Node = linkedList.Node;
    expect(new Node(7))
      .to
      .deep
      .equal({value: 7, next: null})
  });
});

describe('addToTail', function() {
  it('should be a function', function() {
    var LinkedList = new linkedList.LinkedList;
    expect(typeof LinkedList.addToTail).to.equal('function');
  });

  it('head and tail should be pointing to the same node if it is the first node in the linked list', function() {
    var LinkedList = new linkedList.LinkedList();
    LinkedList.addToTail(7);
    expect(LinkedList.head).to.deep.equal({value: 7, next: null});
    expect(LinkedList.tail).to.deep.equal({value: 7, next: null});
  });

  it('head and tail should point to separate nodes when addToTail() twice', function() {
    var LinkedList = new linkedList.LinkedList();
    LinkedList.addToTail(7);
    LinkedList.addToTail(8);
    expect(LinkedList.head).to.deep.equal({value: 7, next: {value:8, next: null}});
    expect(LinkedList.tail).to.deep.equal({value: 8, next: null});
  });

  it('head should point to the first node, middle node must point to the newest node, newest node must point to null', function() {
    var LinkedList = new linkedList.LinkedList();

    for (var i = 7; i <= 9; i++) {
      LinkedList.addToTail(i);
    }

    expect(LinkedList.head).to.deep.equal({value: 7, next: {value:8, next: {value:9, next: null}}});
    expect(LinkedList.tail).to.deep.equal({value: 9, next: null});
  });
});

describe('removeHead', function() {
  it('should be a function', function() {
    var LinkedList = new linkedList.LinkedList();
    expect(typeof LinkedList.removeHead).to.equal('function');
  });

  it('should return the node that it removed', function() {
    var LinkedList = new linkedList.LinkedList();

    for (var i = 7; i <= 9; i++) {
      LinkedList.addToTail(i);
    }

    expect(LinkedList.removeHead()).to.deep.equal(7);
    expect(LinkedList.head).to.deep.equal({value: 8, next: {value: 9, next: null}});
  });
});

describe('removeNode', function() {
  var LinkedList = new linkedList.LinkedList();

  it('should be a function', function() {
    expect(typeof LinkedList.removeNode).to.equal('function');
  });

  it('should take a number as a input and throw: argument value should be a integer', function() {
    var error = 'argument value should be a integer';
    expect(LinkedList.removeNode('string')).to.equal(error);
    expect(LinkedList.removeNode({})).to.equal(error);
    expect(LinkedList.removeNode([])).to.equal(error);
    expect(LinkedList.removeNode(function(){})).to.equal(error);
    expect(LinkedList.removeNode(undefined)).to.equal(error);
  });

  it('should remove node from the middle of a single linked list', function() {
    var LinkedList = new linkedList.LinkedList();

    for (var i = 1; i <= 5; i++) {
      LinkedList.addToTail(i);
    }

    expect(LinkedList.removeNode(3, LinkedList.head)).to.deep.equal({value: 1, next: {value: 2, next: {value: 4, next: {value: 5, next: null}}}});
  });


});

describe('contains', function() {
  it('should be a function', function() {
    var LinkedList = new linkedList.LinkedList();
    expect(typeof LinkedList.contains).to.equal('function');
  });

  it('should return false if target is not in the linked list', function() {
    var LinkedList = new linkedList.LinkedList();

    for (var i = 7; i <= 9; i++) {
      LinkedList.addToTail(i);
    }

    for (var i = 1; i <= 6; i++) {
      expect(LinkedList.contains(i)).to.equal(false);    
    }

  });

  it('should return true if target is in the linked list', function() {
    var LinkedList = new linkedList.LinkedList();

    for (var i = 7; i <= 9; i++) {
      LinkedList.addToTail(i);
    }

    for (var i = 7; i <= 9; i++) {
      expect(LinkedList.contains(i)).to.equal(true); 
    }   
  });

});

describe('removeDuplicateNode', function() {
  it('should be a function', function() {
    expect(typeof LinkedList.removeDuplicateNode).to.equal('function');
  });

  var LinkedList = new linkedList.LinkedList();
  LinkedList.addToTail(1);
  LinkedList.addToTail(2);
  LinkedList.addToTail(3);
  LinkedList.addToTail(1);
  LinkedList.addToTail(7);
  LinkedList.addToTail(3);
  LinkedList.removeDuplicateNode();

  expect(LinkedList.head).to.deep.equal({value: 1, next: {value: 2, next: {value: 3, next: {value: 7, next: null}}}});

  var LinkedList2 = new linkedList.LinkedList();
  LinkedList2.addToTail(1);
  LinkedList2.addToTail(1);
  LinkedList2.addToTail(2);
  LinkedList2.addToTail(2);
  LinkedList2.addToTail(3);
  LinkedList2.addToTail(3);
  LinkedList2.removeDuplicateNode();

  expect(LinkedList2.head).to.deep.equal({value: 1, next: {value: 2, next: {value: 3, next: null}}});
});

describe('nthToLast', function() {
  var LinkedList = new linkedList.LinkedList();

  it('should be a function', function() {
    expect(typeof LinkedList.nthToLast).to.equal('function');
  });

  it('target parameter should be a number or throw error', function() {
    var error = 'nth must be a number type';
    expect(LinkedList.nthToLast('string')).to.equal(error);
    expect(LinkedList.nthToLast({})).to.equal(error);
    expect(LinkedList.nthToLast([])).to.equal(error);
    expect(LinkedList.nthToLast(function(){})).to.equal(error);
  });

  it('should return a linked list: object', function() {
    for (var i = 1; i <= 4; i++) {
      LinkedList.addToTail(i);
    }
    expect(LinkedList.nthToLast(1, LinkedList.head)).to.be.a('object');
  });

  it('should slice the linked list from nth to last', function() {
    var LinkedList = new linkedList.LinkedList();
    for (var i = 1; i <= 4; i++) {
      LinkedList.addToTail(i);
    }
    expect(LinkedList.nthToLast(1, LinkedList.head)).to.deep.equal({value: 2, next: {value: 3, next: {value: 4, next: null}}});

    for (var i = 5; i <= 8; i++) {
      LinkedList.addToTail(i);
    }
    expect(LinkedList.nthToLast(3, LinkedList.head)).to.deep.equal({value: 5, next: {value: 6, next: {value: 7, next: {value: 8, next: null}}}});
  });
});