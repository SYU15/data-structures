var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = [];
};

Graph.prototype.contains = function(node){
  return _.contains(Object.keys(this.nodes), node);
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this.nodes[fromNode], toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



