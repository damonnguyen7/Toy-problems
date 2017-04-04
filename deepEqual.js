/*
deepEqua({}, {}) === true
deepEqual({x: 1}, {x: 2}) === false
deepEqual({x: 1, y: {z: 2}}, {x: 1, y: {z: 2}}); === true
*/

function deepEqual(objA, objB) {
  if (typeof objA === 'object' && objA !== null && typeof objB === 'object' && objB !== null) {
    var propsInObjA = Object.keys(objA);
    var propsInObjB = Object.keys(objB);
    if (propsInObjA.length !== propsInObjB.length) {
      return false;
    }
    for (var i = 0; i < propsInObjA.length; i++) {
      var currentProp = propsInObjA[i];
      if (propsInObjB.indexOf(currentProp) === -1) {
        return false;
      }
    }
    for (var j = 0; j < propsInObjA.length; j++) {
      var currentProp = propsInObjA[j];
      if (typeof objA[currentProp] !== 'object' && typeof objB[currentProp] !== 'object') {
        if (objA[currentProp] !== objB[currentProp]) {
          return false;
        }
      } else {
        return deepEqual(objA[currentProp], objB[currentProp]);
      }
    }
  }
  return true;
}