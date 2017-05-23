//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

function booWho(bool) {
  if (bool === false || bool === true) {
    return true;
  } else if (bool !== false && bool !== true) {
    return false;
  }
}

booWho(null); //false
booWho(false); //true
booWho(true); //true