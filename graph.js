//directed graph data structure
function Graph() {
  this.graph = {};
}

function Node(value) {
  this.value = value;
  this.collection = {};
};

Graph.prototype.addNode = function(value) {
  this.graph[value] = new Node(value);
};

Graph.prototype.contains = function(targetNode) {
  return this.graph[targetNode] ? true : false;
};

Graph.prototype.removeEdge = function(a, b) {
  delete this.graph[a].collection[b];
};

Graph.prototype.addEdge = function(a, b) {
  var error = 'argument node does not exist in graph: '
  if (this.contains(a) === false && this.contains(b) === false) {
    return error + a + ', ' + b;
  } else if (this.contains(a) === false) {
    return error + a;
  } else if (this.contains(b) === false) {
    return error + b;
  }

  this.graph[a].collection[b] = this.graph[b];
};

Graph.prototype.hasEdge = function(a, b) {
  return this.graph[a].collection[b] ? true : false;
};

Graph.prototype.removeNode = function(targetNode) {
  var removeValue = this.graph[targetNode].value;
  //delete the node from the graph
  delete this.graph[targetNode];
  
  //iterate through all the node's collection and remove the edge
  this.forEachNode(function(node) {
    if (node.collection[targetNode]) {
      delete node.collection[targetNode];
    }
  });
  return removeValue;
};

Graph.prototype.forEachNode = function(callback) {
  for (var node in this.graph) {
    callback(this.graph[node]);
  }
};

module.exports = {
  Graph: Graph,
  Node: Node
};