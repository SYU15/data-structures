var Queue = function() {
  this.next = 0;
  this.last = 0;
  this.storage = {};
};

Queue.prototype.size = function(){
  return this.last - this.next;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function(){
  if(this.last - this.next > 0){
    var value = this.storage[this.next];
    delete this.storage[this.next];
    this.next++;
    return value;
  }
};
