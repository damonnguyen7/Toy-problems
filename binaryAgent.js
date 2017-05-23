//Return an English translated sentence of the passed binary string.
//The binary string will be space separated.

function binaryAgent(str) {
  const binKey = { 7: 1, 6: 2, 5: 4, 4: 8, 3: 16, 2: 32, 1: 64, 0: 128 };
  let arrayOfBin = str.split(' ');
  let arrayOfCharacter = arrayOfBin.map(function(currentBin) {
    let numericBin = 0;
    for (let i = currentBin.length - 1; i>= 0; i--) {
      let bit = currentBin[i];
      numericBin += bit * binKey[i];
    }
    return String.fromCharCode(numericBin);
  });
  return arrayOfCharacter.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
