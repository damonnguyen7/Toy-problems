/*
Given an arbitrary input string, return the first non-repeating character. 
For strings with all repeats, return 'sorry'.
*/

function firstNonRepeatedCharacter (string) {
  var counter = {};
  for (var i = 0; i < string.length; i++) {
    counter[string[i]] = counter[string[i]] === undefined ? 1 : counter[string[i]] + 1;
  }
  for (var key in counter) {
    if (counter[key] < 2) {
      return key;
    }
  }
  return 'sorry';
}
