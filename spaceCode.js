/*
Write a method to replace all spaces in a string with ‘%20’
*/

function spaceCode(string) {
  var spacer = '%20';
  var regex = new RegExp(' ', 'g');
  if (typeof string !== 'string') {
    return 'Please Input String Type Data';
  }
  return string.replace(regex, spacer);
}

module.exports = spaceCode;