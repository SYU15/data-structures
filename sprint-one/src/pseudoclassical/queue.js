var Queue = function() {
  this.next = 0;
  this.last = 0;
};

Queue.prototype.size = function(){
  return this.last - this.next;
};

Queue.prototype.enqueue = function(value) {
  this.last++;
};

Queue.prototype.dequeue = function(){
  if(this.last - this.next > 0){
    this.next++;
  }
};
