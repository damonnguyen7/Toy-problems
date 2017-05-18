//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  str = str.split('');
  if (str[0] !== 'a') {
    return undefined;
  }
  for (let i = 0; i < str.length; i++) {
    let currentCharCode = str[i].charCodeAt();
    if (String.fromCharCode(currentCharCode + 1) !== str[i + 1]) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return str;
};

fearNotLetter("abcdefghjklmno"); //=> "i"