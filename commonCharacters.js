/*
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

var commonCharacters = (string1, string2) => {
  let output = [];
  string1.split("").forEach(char => {
    if (string2.indexOf(char) !== -1 && char !== " ") {
      output.push(char);
    }
  });
  return Array.from(new Set(output)).join("");
};

//Array.from() method will create an array instance of the iterable object.
//new Set() instantiates a new object with non duplicates.