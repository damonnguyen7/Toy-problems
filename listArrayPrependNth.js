//arrayToList takes in an array and returns a list
//
function arrayToList(array){
  var result;
  var temp;
  for(var i = array.length-1; i >= 0; i--){
    if(result === undefined) {
      result = {
        val:array[i],
         rest: null
      }
    } else {
      temp = {
        val: array[i],
        rest: result
      }
      result = temp;
    }
  }
  return result;       
}

arrayToList([1,2,3]);

/*
this is a list
{
  val: 1, 
  rest: {
    val: 2,
    rest: {
      val: 3,
      rest: null
    }
  }
}
*/

function listToArray(list) {
  var result = [];
  var currentItem = list;
  while (currentItem.rest !== null) {
    result.push(currentItem.val);
    currentItem = currentItem.rest;
  }
  if(currentItem.rest === null) {
    result.push(currentItem.val);
  }
    return result;
}

var list = {
  val: 1,
  rest: {
    val: 2,
    rest: {
      val: 3,
      rest: null
    }
  }
}

listToArray(list); //[1,2,3]

function prepend(val,rest){
  var result = {
    val: val,
    rest: rest || null
  }
  return result;
}

prepend(10, prepend(20, null)); 

/*
{
  val: 10,
  rest: {
    val: 20,
    rest: null
  }
}
*/

function nth(list, index) {
  var currentItem = list;
  for(var i = 0; i <= index; i++) {
    if(i !== index) {
      currentItem = currentItem.rest;
    } else {
      return currentItem.val;
    }
  }
}

nth(arrayToList([10,20,30]), 1); //20
