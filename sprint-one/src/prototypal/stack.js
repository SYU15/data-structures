var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
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


