/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
  return isValidBSTHelper(root, -Infinity, Infinity);
};

const isValidBSTHelper = (node, minVal, maxVal) => {
  if(node === null) return true;
  if(minVal >= node.val || node.val >= maxVal) return false;
  return isValidBSTHelper(node.left, minVal, node.val) && isValidBSTHelper(node.right, node.val, maxVal);
}