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

  BFS() {
    let queue = [];
    let data = [];
    let node = this.root;
    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      data.push(node);
      if(node.left !== null) {
        queue.push(node.left);
      } if(node.right !== null) {
        queue.push(node.right);
      }
    }
    return data;
  }
}

/*
            10
        6       15
      3  8        20

  queue = []
  data = [10, 6, 15, 3, 8, 20]
*/

var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//console.log(tree);
console.log(tree.BFS());