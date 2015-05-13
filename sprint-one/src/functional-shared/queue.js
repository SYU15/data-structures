var Queue = function(){
  var newQueue = {};
  newQueue.next = 0;
  newQueue.last = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.last - this.next;
};

queueMethods.enqueue = function(value){
  this[this.last] = value;
  this.last++;
};

queueMethods.dequeue = function(){
  if(this.last - this.next > 0){
    var value = this[this.next];
    delete this[this.next];
    this.next++;
    return value;
  }
};
