var expect = require('chai').expect;
var Graph = require('../graph.js').Graph;
var Node = require('../graph.js').Node;

describe('Graph', function() {
  var myGraph;

  beforeEach(function() {
    myGraph = new Graph;
  });

  it('should be a function', function() {
    expect(typeof Graph).to.equal('function');
  });

  it('should have properties: graph', function() {
    expect(myGraph).to.have.property('graph');
  });

  it('should have methods: addNode, contains, removeNode, addEdge, hasEdge, removeEdge, forEachNode', function() {
    var methods = ['addNode', 'contains', 'removeNode', 'addEdge', 'hasEdge', 'removeEdge', 'forEachNode'];
    methods.forEach(function(method) {
      expect(myGraph).to.have.property(method);
    });
  });
});

describe('Node', function() {
  var myNode = new Node('Damon');
  it('should be a function', function() {
    expect(typeof Node).to.equal('function');
  });

  it('should instantiate node with properties: value, collection', function() {
    var properties = ['value', 'collection'];
    properties.forEach(function(property) {
      expect(myNode).to.have.property(property);
    });
  });

  it('collection should be an object', function() {
    expect(Array.isArray(myNode.collection)).to.equal(false);
    expect(typeof myNode.collection).to.equal('object');
  });
});

describe('Graph.addNode', function() {
  var myGraph;

  beforeEach(function() {
    myGraph = new Graph;
  });

  it('should be a function', function() {
    expect(typeof myGraph.addNode).to.equal('function');
  });

  it('should add a node to the graph', function() {
    var addNodeValue = ['Dennis', 'Damon', 'Daniel', 'Darren'];
    addNodeValue.forEach(function(value) {
      myGraph.addNode(value);
    });

    addNodeValue.forEach(function(value) {
      expect(myGraph.graph).to.have.property(value);
    });
  });
});

describe('Graph.contains', function() {
  var myGraph;
  var addNodeValue = ['Dennis', 'Damon', 'Daniel', 'Darren'];

  beforeEach(function() {
    myGraph = new Graph;
    addNodeValue.forEach(function(value) {
      myGraph.addNode(value);
    });
  });

  it('should be a function', function() {
    expect(typeof myGraph.contains).to.equal('function');
  });

  it('should return true since the node is in the graph', function() {
    addNodeValue.forEach(function(value) {
      expect(myGraph.contains(value)).to.equal(true);
    });
  });

  it('should return false since the node is in the graph', function() {
    expect(myGraph.contains('Dillon')).to.equal(false);
  });
});

describe('Graph.addEdge/Graph.hasEdge', function() {
  var myGraph;
  var addNodeValue = ['Dennis', 'Damon', 'Daniel', 'Darren'];

  beforeEach(function() {
    myGraph = new Graph;
    addNodeValue.forEach(function(value) {
      myGraph.addNode(value);
    });
  });

  it('should be a function', function() {
    expect(typeof myGraph.addNode).to.equal('function');
  });

  it('should throw an error if node or nodes does not exist in the graph', function() {
    var error = 'argument node does not exist in graph: '
    expect(myGraph.addEdge('Daisy', 'Dillon')).to.equal(error + 'Daisy, Dillon');
    expect(myGraph.addEdge('Damon', 'Dillon')).to.equal(error + 'Dillon');
    expect(myGraph.addEdge('Daisy', 'Damon')).to.equal(error + 'Daisy');
  });

  it('should return true if only one node has edge', function() {
    myGraph.addEdge('Dennis', 'Damon');
    expect(myGraph.hasEdge('Dennis', 'Damon')).to.equal(true);
  });

  it('should return false if only one node has edge', function() {
    expect(myGraph.hasEdge('Damon', 'Dennis')).to.equal(false);
  });
});

describe('Graph.removeNode', function() {
  var myGraph;
  var addNodeValue = ['Dennis', 'Damon', 'Daniel', 'Darren'];
  beforeEach(function() {
    myGraph = new Graph;
    addNodeValue.forEach(function(value) {
      myGraph.addNode(value);
    });
  });

  it('should be a function', function() {
    expect(typeof myGraph.removeNode).to.equal('function');
  });

  it('should return the node.value that it removed', function() {
    expect(myGraph.removeNode('Dennis')).to.equal('Dennis');
  });

  it('should remove node from graph', function() {
    myGraph.removeNode('Dennis');
    expect(myGraph.contains('Dennis')).to.equal(false);
  });

  it('All edges connected to the removed Node are removed as well', function() {
    addNodeValue = addNodeValue.slice(1);
    addNodeValue.forEach(function(value) {
      myGraph.addEdge(value, 'Dennis');
    });

    myGraph.removeNode('Dennis');

    addNodeValue.forEach(function(value) {
      expect(myGraph.hasEdge(value, 'Dennis')).to.equal(false);
    });
  });
});

describe('Graph.removeEdge', function() {
  var myGraph;
  var addNodeValue = ['Dennis', 'Damon', 'Daniel', 'Darren'];

  beforeEach(function() {
    myGraph = new Graph;
    addNodeValue.forEach(function(value) {
      myGraph.addNode(value);
    });
  });

  it('should be a function', function() {
    expect(typeof myGraph.addNode).to.equal('function');
  });

  it('should remove connection from one node', function() {
    myGraph.addEdge('Dennis', 'Damon');
    myGraph.removeEdge('Dennis', 'Damon');
    expect(myGraph.hasEdge('Dennis', 'Damon')).to.equal(false);
  });
});

describe('Graph.forEachNode', function() {
  var myGraph;
  var addNodeValue = ['Dennis', 'Damon', 'Daniel', 'Darren'];

  beforeEach(function() {
    myGraph = new Graph;
    addNodeValue.forEach(function(value) {
      myGraph.addNode(value);
    });
  });

  it('should be a function', function() {
    expect(typeof myGraph.forEachNode).to.equal('function');
  });

  it('should traverse and invoke callback function on all nodes', function() {
    var results = [];
    function addToResults(node) {
      results.push(node.value);
    };
    myGraph.forEachNode(addToResults);
    expect(results).to.deep.equal(['Dennis', 'Damon', 'Daniel', 'Darren']);
  });  
});