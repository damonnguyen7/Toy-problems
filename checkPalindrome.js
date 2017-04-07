/*
Given the string, check if it is a palindrome.

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;

For inputString = "abac", the output should be
checkPalindrome(inputString) = false;

For inputString = "a", the output should be
checkPalindrome(inputString) = true.
*/

function checkPalindrome(inputString) {
  if (inputString.length === 1 || inputString.length === 0) {
    return true;
  }
  if (inputString[0] === inputString[inputString.length - 1]) {
    return checkPalindrome(inputString.slice(1, -1));
  }
  return false;
}
