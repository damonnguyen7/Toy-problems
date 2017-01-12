var expect = require('chai').expect;
var Tree = require('../tree.js');

describe('Tree', function() {
  var myTree;

  beforeEach(function() {
    myTree = new Tree;
  });

  it('should be a function', function() {
    expect(typeof Tree).to.equal('function');
  });

  it('should have properties: children, value', function() {
    expect(myTree).to.have.property('value');
    expect(myTree).to.have.property('children');
    expect(Array.isArray(myTree.children)).to.equal(true);
  });

  it('should have methods: addChild, contains', function() {
    expect(myTree).to.have.property('addChild');
    expect(myTree).to.have.property('contains');
  });
});

describe('Tree.addChild', function() {
  var myTree;

  beforeEach(function() {
    myTree = new Tree;
  });

  it('should be a function', function() {
    expect(typeof myTree.addChild).to.equal('function');
  });

  it('should instantiate a new node with the value argument and add that node as a child of the tree', function() {
    myTree.addChild(5);
    expect(myTree.children[0].value).to.equal(5);
  });
});

describe('Tree.contains', function() {
  var myTree;

  beforeEach(function() {
    myTree = new Tree;
  });

  it('should be a function', function() {
    expect(typeof myTree.contains).to.equal('function');
  });

  it('should return boolean value depending if a child is found', function() {
    var children = [1,3,5,7];

    children.forEach(function(child) {
      myTree.addChild(child);
    });

    expect(myTree.contains(1)).to.equal(true);
    expect(myTree.contains(2)).to.equal(false);
    expect(myTree.contains(3)).to.equal(true);
    expect(myTree.contains(4)).to.equal(false);
    expect(myTree.contains(5)).to.equal(true);
    expect(myTree.contains(6)).to.equal(false);
    expect(myTree.contains(7)).to.equal(true);
  });
});