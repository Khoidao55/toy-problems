/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
class Solution {
  constructor(head) {
    this.head = head;
    this.numArr = [];
  }

  getNumArray() {
    let currentNode = this.head;
    while (currentNode) {
      this.numArr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return this.numArr;
  }
}

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let numArr = this.getNumArray();
  let randomElement = Math.floor(Math.random() * numArr.length);
  return numArr[randomElement];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
