//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  function flatten(array) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
      let currentElement = array[i];
      if (Array.isArray(currentElement)) {
        results = results.concat(flatten(currentElement));
      } else {
        results.push(currentElement);
      }
    }
    return results;
  };
  return flatten(arr);
}

steamrollArray([1, [2], [3, [[4]]]]); //[1, 2, 3, 4]
