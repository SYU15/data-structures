var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i]){
    this._storage[i].push([k, v]);
  } else {
    this._storage[i] = [[k, v]];
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
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: O(1)
 * retrieve: O(1)
 * remove: O(1)
 *
 */
