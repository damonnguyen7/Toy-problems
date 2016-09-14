/*
Implement the function ‘bind’, which accepts a function and a context as arguments. 
The context argument should override an existing context that the function is defined in. 
Your bind function should return the passed in function.

var alice = {
  name: 'alice',
  shout: function () {
    alert('here comes' + ' ' + this.name);
  }
};

alice.shout() //=> 'here comes alice'

If you use your bind function with the context { name: 'bob' }, as is shown here:
boundShout = bind(alice.shout, { name: 'bob' })

Then calling boundShout() will alert 'here comes bob'

The following example should also work in the following way once your function is implemented:

var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'diet');

boundFunc('coke'); //=> 'dietcoke'

*/

var bind = function(func, context) {
  var parentArgs = Array.prototype.slice.call(arguments, 2);
  return function() {
    var childArgs = Array.prototype.slice.call(arguments, 0);
    var concatArgs = parentArgs.concat(childArgs);
    return func.apply(context, concatArgs);
  }
}

Function.prototype.bind = function(context) {
  var parentArgs = Array.prototype.slice.call(arguments, 1);
  var func = this;
  return function() {
    var childArgs = Array.prototype.slice.call(arguments, 0);
    var concatArgs = parentArgs.concat(childArgs);
    return func.apply(context, concatArgs);
  }
}
