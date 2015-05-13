var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.next = 0;
  newQueue.last = 0;
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
