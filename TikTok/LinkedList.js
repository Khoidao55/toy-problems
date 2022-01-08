class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length) {
      this.append(value);
      return;
    }
    let counter = 0;
    const newNode = new Node(value);
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode.next !== null) {
      if (counter === index) {
        newNode.next = currentNode;
        prevNode.next = newNode;
        this.length++;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
  }
  remove(value) {
    if (this.head.value === value) {
      let oldHead = this.head;
      this.head = oldHead.next;
    }
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        prevNode.next = currentNode.next;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
      this.length--;
    }
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let firstNode = this.head;
    this.tail = this.head;
    let secondNode = firstNode.next;
    while (secondNode) {
      const tempNode = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = tempNode;
    }
    this.head.next = null;
    this.head = firstNode;
  }
  printList() {
    const linkedListArr = [];
    let currentNode = this.head;
    while (currentNode) {
      linkedListArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return linkedListArr;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0, 99);
myLinkedList.reverse();
console.log(myLinkedList.printList());
