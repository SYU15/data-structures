var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function(){
  if(this.parent){
    var currentTree = this;
    _.each(this.parent.children, function(child, index){
      if(child === currentTree){
        currentTree.parent.children.splice(index, 1);
      }
    });
    this.parent = null;
  }
};

treeMethods.contains = function(target){
  if(this.value === target){
    return true;
  }
  return _.some(this.children, function(child){
    if(child.contains(target)){
      return true;
    }
    return false;
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addChild: O(1)
 * contains: O(n)
 */
