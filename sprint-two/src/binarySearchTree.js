var BinarySearchTree = function(value){
  var newBinarySearchTree = {};
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  _.extend(newBinarySearchTree, binarySearchTreeMethods);
  return newBinarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value){
  var newTree = BinarySearchTree(value);
  var position = this.compare(value);
};

binarySearchTreeMethods.contains = function(target){

};

binarySearchTreeMethods.depthFirstLog = function(){

};

binarySearchTreeMethods.compare = function(value){
  if(value < this.value){
    if(this.left === null){
      return this;
    } else {
      return this.left.compare(value);
    }
  } else {
    if(this.right === null){
      return this;
    } else{
      return this.right.compare(value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
