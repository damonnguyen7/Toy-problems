/*

Sort the letters in the string s by the order they occur in the string t.

Example

For s = "weather" and t = "therapyw", the output should be
sortByString(s, t) = "theeraw";

For s = "good" and t = "odg", the output should be
sortByString(s, t) = "oodg".

*/

function sortByString(s, t) {
  var result = [];
  
  for (var i = 0; i < t.length; i++) {
    var regex = new RegExp(t[i], 'gi');
    var matchedChars = s.match(regex);
    result = result.concat(matchedChars);
  }
  
  return result.join('');
}
