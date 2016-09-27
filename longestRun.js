/*
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.
*/

var longestRun = function(string) {
  var greatestRun = [0, 0],
      currentRun = [0, 0];
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      currentRun[1] = i;
      if (currentRun[1] - currentRun[0] > greatestRun[1] - greatestRun[0]) {
         greatestRun = currentRun;
      }
    } else {
      currentRun = [i, i];
    }
  }
  return greatestRun;
};
