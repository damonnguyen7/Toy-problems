/*
Find the first item that occurs an even number of times in an array. 
Remember to handle multiple even-occurrence items and return the first one. 
Return null if there are no even-occurrence items.
*/



function evenOccurrence (array) {
  var stringifiedArray = array.join('');
  for (var i = 0; i < array.length; i++) {
    var currentElement = array[i];
    var regex = new RegExp(currentElement.toString(), 'g');
    var matchedElements = stringifiedArray.match(regex);
    if (matchedElements.length % 2 === 0) {
      return currentElement;
    }
  }
  return null;
}
