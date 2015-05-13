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

stackMethods.push = function(value){
  this[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function(){
  if(this.stackSize > 0){
    this.stackSize--;
    var value = this[this.stackSize];
    delete this[this.stackSize];
    return value;
  }
};
