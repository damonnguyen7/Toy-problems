function createMessage(str) {
  return function(next) {
    if (next === undefined) {
      return str
    } else {
      return createMessage(str + ' ' + next);
    }
  }
};

createMessage("Hello")("World!")("how")("are")("you?")();
//This will return the following: "Hello World! how are you?"
