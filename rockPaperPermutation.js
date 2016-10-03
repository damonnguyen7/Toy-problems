function rockPaperPermutation (roundCount) {
  var choices = ['r', 'p', 's'], results = [];
  var compose = function(string) {
    if (string.length === roundCount) {
      results.push(string);
      return;
    }
    for (var i = 0; i < choices.length; i++) {
      compose(string + choices[i]);
    }
  }
  if (roundCount !== 0) {
    compose('');
  }
  return results;
}
