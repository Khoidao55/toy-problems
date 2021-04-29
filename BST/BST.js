class BST {
  constructor() {
    this.root = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

insert(value) {
  if(!this.root) {
    this.root = new Node(value);
  } else {
    let currentNode = this.root;
    while(currentNode) {
      if(currentNode.val < value && currentNode.left === null) {
        currentNode.left = new Node(value);
      } else if(currentNode.val < value && currentNode.left !== null) {
        currentNode = currentNode.left;
      } else if(currentNode.val > value && currentNode.right !== null) {
        currentNode = currentNode.right;
      } else {
        currentNode.right = new Node(value);
      }
    }
  }
}