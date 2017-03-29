/*
Reverse the order of words in a given string sentence. You can assume that sentence does not have any leading, trailing or repeating spaces.

For sentence = "Man bites dog", the output should be
reverseSentence(sentence) = "dog bites Man".
*/

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}
