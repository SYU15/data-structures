var DoublyLinkedList = function(){
  var doublyLinkedList = LinkedList();

  doublyLinkedList.addToHead = function(value){
    var newHead = DoubleNode(value);
    if(!doublyLinkedList.head){
      doublyLinkedList.head = newHead;
      doublyLinkedList.tail = newHead;
    } else {
      newHead.next = doublyLinkedList.head;
      doublyLinkedList.head.previous = newHead;
      doublyLinkedList.head = newHead;
    }
  };

  doublyLinkedList.removeTail = function(){

  };

  return doublyLinkedList;
};

var DoubleNode = function(value){
  var doubleNode = Node(value);
  doubleNode.previous = null;
  return doubleNode;
};
