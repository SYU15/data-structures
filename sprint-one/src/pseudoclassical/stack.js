var Stack = function() {
  this.stackSize = 0;
};

Stack.prototype.size = function(){
  return this.stackSize;
};

Stack.prototype.push = function(value){
  this.stackSize++;
};

Stack.prototype.pop = function(){
  if(this.stackSize > 0){
    this.stackSize--;
  }
};
