/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

 function cloneGraph(node: Node | null): Node | null {
  if(!node) {
      return node;
  }
  let nodeMap = {};
let copiedNode: Node = new Node(node.val, []);
  nodeMap[node.val] = copiedNode;

  dfsGraph(nodeMap, node, copiedNode);
  return copiedNode;
};

function dfsGraph(map: object, node: Node | null, copyNode: Node | null): void {
  for(let neighbor of node.neighbors) {
      if(map[neighbor.val]) {
          copyNode.neighbors.push(map[neighbor.val]);
      } else {
          const copy = new Node(neighbor.val, []);
          map[neighbor.val] = copy;
          copyNode.neighbors.push(copy);
          dfsGraph(map, neighbor, copy);
      }
  }
}