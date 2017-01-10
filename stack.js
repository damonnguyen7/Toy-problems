function Stack() {
  this.stack = {}
  this.stackSize = 0;
};

Stack.prototype.push = function(value) {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return 'argument must be string or number';
  }
  this.stack[this.stackSize] = value;
  this.stackSize++;
  return this.stack;
};

Stack.prototype.pop = function() {
  if (this.stackSize > 0) {
    this.stackSize--
    var popped_value = this.stack[this.stackSize];
    delete this.stack[this.stackSize];
    return popped_value;
  } else {
    this.stackSize = 0;
    return 'no more item on stack!';
  }
};

Stack.prototype.length = function() {
  return this.stackSize;
};



module.exports = Stack;