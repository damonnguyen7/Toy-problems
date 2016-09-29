function spiralTraversal (matrix) {
  var results = [];
  
}


function right(matrix, index) {
  var results = [];
  for (var i = 0; i < matrix[index].length; i++) {
    results.push(matrix[index][i]);
  }
  return results;
}

function down(matrix, position) {
  var results = [];
  for (var i = 0; i < matrix.length; i++) {
    results.push(matrix[i][matrix[i].length - position]);
  }
  return results;
}

function left(matrix, index) {
  var results = [];
  for (var i = matrix[index].length -1; i >= 0; i--) {
    results.push(matrix[index][i]);
  }
  return results;
}

function up(matrix, position, range) {
  var results = [];
  for (var i = matrix.length; i > range; i--) {
    results.push(matrix[i][position]);
  }
  return results;
}