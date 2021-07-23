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
    const data = [];
    const queue = [];
    let currentNode = this.root;
    currentNode && queue.push(currentNode);

    while(queue.length !== 0) {
      currentNode = queue.shift();
      data.push(currentNode.value);
      currentNode.left && queue.push(currentNode.left);
      currentNode.right && queue.push(currentNode.right);
    }
    return data;
  }

  DFS_preOrder() {
    const data = [];
    function traverse(node) {
      data.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFS_postOrder() {
    const data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFS_inOrder() {
    const data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(this.root);
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
console.log('this is the data', tree.DFS_inOrder());