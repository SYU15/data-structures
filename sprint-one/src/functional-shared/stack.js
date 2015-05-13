var Stack = function() {
  var newStack = {};
  newStack.stackSize = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.size = function(){
  return this.stackSize;
};

stackMethods.push = function(){
  this.stackSize++;
};

stackMethods.pop = function(value){
  if(this.stackSize > 0){
    this.stackSize--;
  }
};
