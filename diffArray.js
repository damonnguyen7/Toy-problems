// Compare two arrays and return a new array with any items only found in one of the two given arrays, 
//but not both. In other words, return the symmetric difference of the two arrays.

const diffArray = (arr1, arr2) => {
  let newArr = [];

  const differ = (array, array2) => {
    let diff = array.filter((element) => {
      if (array2.indexOf(element) === -1) {
        return element;
      }
    });
    newArr = newArr.concat(diff);
  }

  differ(arr1, arr2);
  differ(arr2, arr1);

  return newArr;
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //=> [4]