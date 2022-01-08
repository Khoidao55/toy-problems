/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  let map = {};
  let head = {};
  let tail = {};
  this.capacity = capacity;
  this.length = 0;

  let connect = function (a, b, c = null) {
    a.next = b;
    b.prev = a;
    if (c) {
      b.next = c;
      c.prev = b;
    }
  };

  connect(head, tail);
  this.moveToHead = function (node) {
    if (node.next) {
      //if node.next is not null
      connect(node.prev, node.next); //removing the node from it's place
    }
    connect(head, node, head.next); //move the node to the head.
  };
  this.removeTail = function () {
    let node = tail.prev;
    connect(node.prev, tail);
    delete map[node.key];
  };
  this.map = map;
};

const Node = function (key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const map = this.map;
  if (key in map) {
    let keyVal = map[key].val;
    this.moveToHead(map[key]);
    return keyVal;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const map = this.map;
  if (key in map) {
    this.moveToHead(map[key]);
    map[key].val = value;
  } else {
    let node = new Node(key, value);
    this.moveToHead(node);
    map[key] = node;
    if (this.length === this.capacity) {
      this.removeTail();
    } else {
      this.length++;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
