/*
Implement an algorithm to determine if a string has all unique characters 
*/

function allUniqueCharacter(string) {
  //Return false if string value is not a String type
  var invalid = ['number', 'object', 'function', 'undefined'];
  if (invalid.indexOf(typeof string) > -1) {
    return false;
  }
  //When matching the regex character to the string return an array with length of more than 1 than it is not unique
  for (var i = 0; i < string.length; i++) {
    var regex = new RegExp(string[i], 'gi');
    if (string.match(regex).length > 1) {
      return false;
    }
  }
  return true;  
}

module.exports = allUniqueCharacter;