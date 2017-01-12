//Tree data structure
function Tree(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
};

Tree.prototype.contains = function(value) {
  var childExist = false;
  var myTree = this;
  function childFinder(childValue) {
    for (var i = 0; i < myTree.children.length; i++) {
      var child = myTree.children[i];
      if (child.value === childValue) {
        childExist = true;
        break;
      }
    }
  };
  childFinder(value);
  return childExist;
};

module.exports = Tree;