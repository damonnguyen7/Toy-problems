//Queue built with stack
var Stack = require('./stack');

function Queue() {
  this.Stack1 = new Stack.Stack();
  this.Stack2 = new Stack.Stack();
  this.queue = this.Stack2.stack;
  this.size = 0;
}

Queue.prototype.enqueue = function(value) {
  this.Stack1.push(value);
};

Queue.prototype.dequeue = function() {
  if (this.length() === 1 && this.Stack2.length() === 0) {
    return this.Stack1.pop();
  }
  if (!(this.Stack1.isEmpty())) {
    for (var i = 1; i <= this.size; i++) {
      this.Stack2.push(this.Stack1.pop());
    }
    return this.Stack2.pop();
  } else {
    return this.Stack2.pop();
  }
};

Queue.prototype.length = function() {
  return this.size = this.Stack1.length() + this.Stack2.length();
};

module.exports = Queue;