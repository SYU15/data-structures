var Queue = function(){
  var newQueue = {};
  newQueue.queueSize = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.queueSize;
};

queueMethods.enqueue = function(value){
  this.queueSize++;
};

queueMethods.dequeue = function(){
  if(this.queueSize > 0){
    this.queueSize--;
  }
};
