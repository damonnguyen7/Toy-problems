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
    LinkedList.addToTail(7);
    LinkedList.addToTail(8);
    LinkedList.addToTail(9);
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
    LinkedList.addToTail(7);
    LinkedList.addToTail(8);
    LinkedList.addToTail(9); 
    expect(LinkedList.removeHead()).to.deep.equal(7);
    expect(LinkedList.head).to.deep.equal({value: 8, next: {value: 9, next: null}});
  });
});

describe('contains', function() {
  it('should be a function', function() {
    var LinkedList = new linkedList.LinkedList();
    expect(typeof LinkedList.contains).to.equal('function');
  });

  it('should return false if target is not in the linked list', function() {
    var LinkedList = new linkedList.LinkedList();
    LinkedList.addToTail(7);
    LinkedList.addToTail(8);
    LinkedList.addToTail(9); 
    expect(LinkedList.contains(1)).to.equal(false);    
    expect(LinkedList.contains(2)).to.equal(false);    
    expect(LinkedList.contains(3)).to.equal(false);    
    expect(LinkedList.contains(4)).to.equal(false);    
    expect(LinkedList.contains(5)).to.equal(false);    
    expect(LinkedList.contains(6)).to.equal(false);    
  });

  it('should return true if target is in the linked list', function() {
    var LinkedList = new linkedList.LinkedList();
    LinkedList.addToTail(7);
    LinkedList.addToTail(8);
    LinkedList.addToTail(9); 
    expect(LinkedList.contains(7)).to.equal(true);    
    expect(LinkedList.contains(8)).to.equal(true);    
    expect(LinkedList.contains(9)).to.equal(true);    
 
  });
});