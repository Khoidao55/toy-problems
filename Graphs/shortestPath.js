const shortestPath = (edges, nodeA, nodeB) => {
  const visited = new Set();
  const graph = generateGraph(edges);
  const BFSQueue = [{ nodeName: nodeA, dist: 0 }];

  while(BFSQueue.length) {
    const [currentNode, distance] = BFSQueue.shift();
    if(visited.has(currentNode)) continue;
    visited.add(currentNode);

    if(currentNode === nodeB) {
      return distance;
    }

    for(let node of graph[currentNode]) {
      BFSQueue.push({ nodeName: node, dist: distance + 1 });
    }
  }
  return -1;
};

const generateGraph = (edges) => {
  let graph = {};

  for(let edge in edges) {
    const [firstNode, secondNode] = edges[edge];
    if(!(firstNode in graph)) graph[firstNode] = [];
    if(!(secondNode in graph)) graph[secondNode] = [];
    graph[firstNode].push(secondNode);
    graph[secondNode].push(firstNode);
  }
  return graph;
}


const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'w', 'z'); // -> 2




module.exports = {
  shortestPath
};