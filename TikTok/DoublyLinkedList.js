class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.tail.prev = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
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
    const newNode = new Node(value);
    let pos = 0;
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode) {
      if (pos === index) {
        prevNode.next = newNode;
        newNode.prev = prevNode;
        currentNode.prev = newNode;
        newNode.next = currentNode;
        this.length++;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
      pos++;
    }
  }
  removeHead() {
    const newHead = this.head.next;
    newHead.prev = null;
    this.head = newHead;
    this.length--;
  }
  removeTail() {
    const newTail = this.tail.prev;
    newTail.next = null;
    this.tail = newTail;
    this.length--;
  }
  remove(value) {
    if (this.head.value === value) {
      this.removeHead();
      return;
    }
    if (this.tail.value === value) {
      this.removeTail();
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        let nextNode = currentNode.next;
        let prevNode = currentNode.prev;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
      }
      currentNode = currentNode.next;
    }
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

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(99);
myLinkedList.insert(20, 30);
myLinkedList.insert(0, 25);
myLinkedList.remove(30);
console.log(myLinkedList.printList());
//[25, 99, 10, 5, 30];
