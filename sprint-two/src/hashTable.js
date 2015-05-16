var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i]){
    this._storage[i].push([k, v]);
  } else {
    this._storage[i] = [[k, v]];
  }
  this._size++;
  if(this._size / this._limit >= 0.75){
    this._limit *= 2;
    this.move();
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = null;
  _.each(this._storage[i], function(tuple){
    if(tuple[0] === k){
      value = tuple[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var indexOfKey;
  _.each(this._storage[i], function(tuple, index){
    if(tuple[0] === k){
      indexOfKey = index;
    }
  });
  this._storage[i][indexOfKey] = [];
  this._size--;
  if(this._size / this._limit < 0.25){
    this._limit /= 2;
    this.move();
  }
};

HashTable.prototype.move = function() {
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  var currentHashTable = this;
  oldStorage.each(function(house){
    for(var i = 0; i < house.length; i++){
      currentHashTable.insert(house[i][0], house[i][1]);
    }
  });
};




/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: O(1)
 * retrieve: O(1)
 * remove: O(1)
 *
 */
