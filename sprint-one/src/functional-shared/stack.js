var Stack = function() {
  var newStack = {};
  newStack.stackSize = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.size = function(){
  return this.stackSize;
}

stackMethods.push = function(){
  this.stackSize++;
}
