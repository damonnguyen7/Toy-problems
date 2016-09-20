/* 
Compose should return a function that is the composition of a list of functions of arbitrary length. 
Each function is called on the return value of the function that follows.
You can think of compose as moving right to left through its arguments.

var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}

var welcome = compose(greet, exclaim);
welcome('phillip'); //=> 'hi: PHILLIP!'

----------------------------------------------------------------------------

Pipe composes a series of functions and returns the resulting function. 
Each function is called on the return value of the preceding function.
You can think of pipe as moving left to right through its arguments.

var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }

pipe(add2, multiplyBy3)(5) //=> 21
pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63


*/

var compose = function() {
  var outerArgs = Array.prototype.slice.call(arguments, 0);
  return function() {
    var value = Array.prototype.slice.call(arguments, 0)[0];
    for (var i = outerArgs.length - 1; i >= 0; i--) {
      var func = outerArgs[i];
      value = func.call(this, value);
    }
    return value;
  }
};

var pipe = function(){
  var funcArray = Array.prototype.slice.call(arguments, 0);
  return function() {
    var value = Array.prototype.slice.call(arguments, 0)[0];
    return funcArray.reduceRight(function(accum, func) {
      return compose(accum, func);
    })(value);
  }
};
