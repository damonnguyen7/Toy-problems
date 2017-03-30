/*
You are given a string s that consists of only lowercase English letters. If vowels ('a', 'e', 'i', 'o', and 'u') 
are given a value of 1 and consonants are given a value of 2, return the sum of all of the letters in the input 
string.
*/

function countVowelConsonant(string) {
  var result = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      result++;
    } else {
      result = result + 2;
    }
  }
  return result;
}
