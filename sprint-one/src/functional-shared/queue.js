var Queue = function(){
  var newQueue = {};
  newQueue.queueSize = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.queueSize;
}

