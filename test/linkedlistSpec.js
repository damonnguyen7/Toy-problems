var expect = require('chai').expect;
var linkedList = require('../linkedlist');

describe('linkedList', function() {
  var LinkedList;

  beforeEach(function() {
    LinkedList = new linkedList.LinkedList;
  });

  it('should be a function', function() {
    expect(typeof linkedList.LinkedList).to.equal('function');
  });

  it('should have properties: head, tail', function() {
    expect(LinkedList).to.have.property('head');
    expect(LinkedList).to.have.property('tail');
  });

  it('should have methods: addToTail, removeHead, removeNode, removeDuplicateNode, nthToLast, findBeginningLoop, and sumLinkedList', function() {
    expect(LinkedList).to.have.property('addToTail');
    expect(LinkedList).to.have.property('removeHead');
    expect(LinkedList).to.have.property('removeNode');
    expect(LinkedList).to.have.property('removeDuplicateNode');
    expect(LinkedList).to.have.property('nthToLast');
    expect(LinkedList).to.have.property('findBeginningLoop');
    expect(LinkedList).to.have.property('sumLinkedList');
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
  var LinkedList;

  beforeEach(function() {
    LinkedList = new linkedList.LinkedList;
  });

  it('should be a function', function() {
    expect(typeof LinkedList.addToTail).to.equal('function');
  });

  it('head and tail should be pointing to the same node if it is the first node in the linked list', function() {
    LinkedList.addToTail(7);
    expect(LinkedList.head).to.deep.equal({value: 7, next: null});
    expect(LinkedList.tail).to.deep.equal({value: 7, next: null});
  });

  it('head and tail should point to separate nodes when addToTail() twice', function() {
    LinkedList.addToTail(7);
    LinkedList.addToTail(8);
    expect(LinkedList.head).to.deep.equal({value: 7, next: {value:8, next: null}});
    expect(LinkedList.tail).to.deep.equal({value: 8, next: null});
  });

  it('head should point to the first node, middle node must point to the newest node, newest node must point to null', function() {
    for (var i = 7; i <= 9; i++) {
      LinkedList.addToTail(i);
    }
    expect(LinkedList.head).to.deep.equal({value: 7, next: {value:8, next: {value:9, next: null}}});
    expect(LinkedList.tail).to.deep.equal({value: 9, next: null});
  });
});

describe('removeHead', function() {
  var LinkedList;

  beforeEach(function() {
    LinkedList = new linkedList.LinkedList();
  });

  it('should be a function', function() {
    expect(typeof LinkedList.removeHead).to.equal('function');
  });

  it('should return the node that it removed', function() {
    for (var i = 7; i <= 9; i++) {
      LinkedList.addToTail(i);
    }
    expect(LinkedList.removeHead()).to.deep.equal(7);
    expect(LinkedList.head).to.deep.equal({value: 8, next: {value: 9, next: null}});
  });
});

describe('removeNode', function() {
  var LinkedList;

  beforeEach(function() {
    LinkedList = new linkedList.LinkedList();
  });

  it('should be a function', function() {
    expect(typeof LinkedList.removeNode).to.equal('function');
  });

  it('should take a number as a input and throw: argument target should be a integer', function() {
    var error = 'argument target should be a integer';
    expect(LinkedList.removeNode('string')).to.equal(error);
    expect(LinkedList.removeNode({})).to.equal(error);
    expect(LinkedList.removeNode([])).to.equal(error);
    expect(LinkedList.removeNode(function(){})).to.equal(error);
    expect(LinkedList.removeNode(undefined)).to.equal(error);
  });

  it('should remove node from the middle of a single linked list', function() {
    for (var i = 1; i <= 5; i++) {
      LinkedList.addToTail(i);
    }

    LinkedList.removeNode(1, LinkedList.head);
    expect(LinkedList.contains(1)).to.equal(false);
    
    LinkedList.removeNode(3, LinkedList.head);
    expect(LinkedList.contains(3)).to.equal(false);

    LinkedList.removeNode(5, LinkedList.head);
    expect(LinkedList.contains(5)).to.equal(false);

  });


});

describe('contains', function() {
  var LinkedList;

  beforeEach(function() {
    LinkedList = new linkedList.LinkedList();
  });

  it('should be a function', function() {
    expect(typeof LinkedList.contains).to.equal('function');
  });

  it('should return false if target is not in the linked list', function() {
    for (var i = 7; i <= 9; i++) {
      LinkedList.addToTail(i);
    }
    for (var i = 1; i <= 6; i++) {
      expect(LinkedList.contains(i)).to.equal(false);    
    }
  });

  it('should return true if target is in the linked list', function() {
    for (var i = 7; i <= 9; i++) {
      LinkedList.addToTail(i);
    }
    for (var i = 7; i <= 9; i++) {
      expect(LinkedList.contains(i)).to.equal(true); 
    }   
  });

});

describe('removeDuplicateNode', function() {
  var LinkedList;

  beforeEach(function() {
    LinkedList = new linkedList.LinkedList();
  });

  it('should be a function', function() {
    expect(typeof LinkedList.removeDuplicateNode).to.equal('function');
  });

  it('should return unique linked list', function() {
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
});

describe('nthToLast', function() {
  var LinkedList;

  beforeEach(function() {
    LinkedList = new linkedList.LinkedList();
  });

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

describe('hasCycle', function() {
  var LinkedList;

  beforeEach(function() {
    LinkedList = new linkedList.LinkedList();
  });

  it('should be a function', function() {
    expect(typeof LinkedList.hasCycle).to.equal('function');
  });

  it('should return true if its a cycle linked list', function() {
    LinkedList.addToTail('a');
    LinkedList.addToTail('b');
    var startOfLoop = LinkedList.addToTail('c');
    LinkedList.addToTail('d');
    var endOfLoop = LinkedList.addToTail('e');
    endOfLoop.next = startOfLoop;

    expect(LinkedList.hasCycle(LinkedList.head)).to.equal(true);
  });

  it('should return false if its not a cycle linked list', function() {
    var values = ['a', 'b', 'c', 'd', 'e'];
    for (var i = 0; i < values.length; i++) {
      LinkedList.addToTail(values[i]);
    }
    expect(LinkedList.hasCycle(LinkedList.head)).to.equal(false);
  });
});

describe('findBeginningLoop', function() {
  var LinkedList;

  beforeEach(function() {
    LinkedList = new linkedList.LinkedList();
  });

  it('should be a function', function() {
    expect(typeof LinkedList.findBeginningLoop).to.equal('function');
  });

  it('should return false if not circular linked list', function() {
    var values = ['a', 'b', 'c', 'd', 'e'];
    for (var i = 0; i < values.length; i++) {
      LinkedList.addToTail(values[i]);
    }
    expect(LinkedList.findBeginningLoop(LinkedList.head)).to.equal(false);
  });

  it('should return a node at the beginning of the loop', function() {
    LinkedList.addToTail('a');
    LinkedList.addToTail('b');
    var startOfLoop = LinkedList.addToTail('c');
    LinkedList.addToTail('d');
    var endOfLoop = LinkedList.addToTail('e');
    endOfLoop.next = startOfLoop;
    expect(LinkedList.findBeginningLoop(LinkedList.head)).to.equal('c');
  });
});

describe('sumLinkedList', function() {
  var LinkedList;

  beforeEach(function() {
    LinkedList = new linkedList.LinkedList();
  });

  it('should be a function', function() {
    expect(typeof LinkedList.sumLinkedList).to.equal('function');
  });

  it('should throw error if argument is not a linked list', function() {
    var error = 'argument must be a linked list';

    expect(LinkedList.sumLinkedList(LinkedList.head, 7)).to.equal(error);
    expect(LinkedList.sumLinkedList(LinkedList.head, 'string')).to.equal(error);
    expect(LinkedList.sumLinkedList(LinkedList.head, function(){})).to.equal(error);
    expect(LinkedList.sumLinkedList(LinkedList.head, undefined)).to.equal(error);
  });

  it('should return a single linked list', function() {
    var LinkedList2 = new linkedList.LinkedList();
    expect(typeof LinkedList.sumLinkedList(LinkedList.head, LinkedList2.head)).to.equal('object');
    expect(Array.isArray(LinkedList.sumLinkedList(LinkedList.head, LinkedList2.head))).to.equal(false);
  });

  it('should output linked list with the correct node values', function() {
    var LinkedList = new linkedList.LinkedList();
    var listOfLinkedListValues = [
      [[0, 1, 2], [1, 1, 1]],
      [[3, 1, 5], [5, 9, 2]],
      [[9, 9, 9], [2, 2, 3]]
    ]

    var expectation = {
      '0': {value: 1, next: {value: 2, next: {value: 3, next: null}}},
      '1': {value: 8, next: {value: 0, next: {value: 8, next: null}}},
      '2': {value: 1, next: {value: 2, next: {value: 3, next: {value: 1, next: null}}}}
    }

    function createLinkedLists(a, b) {      
      var linkedList1 = new linkedList.LinkedList();
      a.forEach(function(value) {
        linkedList1.addToTail(value);
      });

      var linkedList2 = new linkedList.LinkedList();
      b.forEach(function(value) {
        linkedList2.addToTail(value);
      });
      // console.log('linkedList1.head: ', linkedList1.head);
      // console.log('linkedList2.head: ', linkedList2.head);

      // console.log('whole linked list: ', linkedList1);
      var x = [linkedList1.head, linkedList2.head];
      console.log('XXXXXXX: ',  x);
      return [linkedList1, linkedList2];
    }


    var suite1 = createLinkedLists(listOfLinkedListValues[0][0], listOfLinkedListValues[0][1]);
    expect(LinkedList.sumLinkedList(suite1[0].head, suite1[1].head)).to.deep.equal(expectation[0]);

    
  });

});