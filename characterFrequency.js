function characterFrequency (string) {
  var results = [],
      storage = {};
  for (var i = 0; i < string.length; i++) {
    if (storage[string[i]] === undefined) {
      storage[string[i]] = 1;
    } else {
      storage[string[i]] += 1;
    }
  }
  for (var key in storage) {
    results.push([key, storage[key]]);
  }
  return results.sort(function(a, b) {
    return b[1] - a[1] || a[0].charCodeAt() - b[0].charCodeAt();
  });
}