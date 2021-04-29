class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while(currentNode) {
        if(currentNode.value > value) {
          if(currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if(currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  contains(value) {
    if(!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      while(currentNode) {
        if(value === currentNode.value) {
          return true;
        } else if(value > currentNode.value && currentNode.right !== null) {
          currentNode = currentNode.right;
        } else if (value < currentNode.value && currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      }
    }
  }
}


var tree = new BST();
// tree.insert(10);
// tree.insert(5);
// tree.insert(2);
// tree.insert(13);
// tree.insert(7);
// tree.insert(11);
// tree.insert(16);

//console.log(tree);
console.log(tree.contains(1));