/*
Design an algorithm and write code to remove the duplicate characters in a string without using any additional bu er NOTE: One or two additional variables are  ne An extra copy of the array is not
*/

function removeDuplicate(string) {
  var error = 'input must be a string!';
  var invalid = ['number', 'object', 'function', 'undefined'];
  var result = '';
  for (var i = 0; i < invalid.length; i++) {
    if (invalid.indexOf(typeof string) > -1) {
      return error;
    }
    string = string.toLowerCase();
  }
  for (var i = 0; i < string.length; i++) {
    if (result.indexOf(string[i]) === -1) {
      result = result.concat(string[i]);
    }
  }
  return result;
}

module.exports = removeDuplicate;