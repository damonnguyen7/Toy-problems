//binary tree
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (typeof value !== 'number') {
    return 'argument must be an number';
  }

  var leftOrRight = value < this.value ? 'left' : 'right';
  if(null === this[leftOrRight]){ // there's no right-hand-side yet
    this[leftOrRight] = new BinarySearchTree(value);
  }else{ // if there IS a rhs, then recursively call insert on that child node
    this[leftOrRight].insert(value);
  }
};

BinarySearchTree.prototype.contains = function(target) {
  var leftOrRight;

  if (this.value === target) {
    return true;
  }

  leftOrRight = target < this.value ? 'left' : 'right';

  if (this[leftOrRight] === null) {
    return false;
  } else {
    return this[leftOrRight].contains(target);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  if (typeof callback !== 'function') {
    return 'argument must be a function';
  }

  this.value = callback(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  } 

  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

module.exports = BinarySearchTree;