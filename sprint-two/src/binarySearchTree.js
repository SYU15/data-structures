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
  var compare = function(value, currentBinary){
    if(value < currentBinary.value){
      if(currentBinary.left === null){
        leftOrRight = 'left';
        return currentBinary;
      } else {
        return compare(value, currentBinary.left);
      }
    } else {
      if(currentBinary.right === null){
        leftOrRight = 'right';
        return currentBinary;
      } else{
        return compare(value, currentBinary.right);
      }
    }
  };

  var leftOrRight;
  var newTree = BinarySearchTree(value);
  var position = compare(value, this);
  position[leftOrRight] = newTree;
};

binarySearchTreeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }

  if(target < this.value){
    if (this.left === null){
      return false;
    }
    return this.left.contains(target);
  } else { //target > this.value
    if (this.right === null){
      return false;
    }
    return this.right.contains(target);
  }
};

binarySearchTreeMethods.depthFirstLog = function(){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
