/*
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.
*/

function calRunDistance(range) {
  return range[1] - range[0];
};

function longestRun(string) {
  var greatestRun = [0, 0],
      currentRun = [-1, 0];
  if (string.length === 0) return currentRun;
  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i];
    let nextCharacter = string[i + 1];
    if (currentRun[0] === -1 && currentRun[1] === 0) {
      if (currentCharacter === nextCharacter) currentRun[0] = i;
    } else if (currentCharacter === nextCharacter) {
      currentRun[1] = i + 1;
    } else if (currentCharacter !== nextCharacter) {
      currentRun[1] = i;
      if (calRunDistance(currentRun) > calRunDistance(greatestRun)) {
        greatestRun = currentRun;
        currentRun = [-1, 0];
      }
    }
  };
  return greatestRun;
};
