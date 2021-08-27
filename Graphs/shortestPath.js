const shortestPath = (edges, nodeA, nodeB) => {
  let visited = new Set();
  let shortestPath = Infinity;
  let graph = generateGraph(edges);
  let BFSQueue = [{nodeName: nodeA, dist: 0}];

  while(BFSQueue.length > 0) {
    let currentNode = BFSQueue.shift();
    if(visited.has(currentNode.nodeName)) continue;
    visited.add(currentNode.nodeName);
    if(currentNode.nodeName === nodeB) {
      shortestPath = Math.min(shortestPath, currentNode.dist);
      return shortestPath;
    }

    for(let node of graph[currentNode.nodeName]) {
      let distance = currentNode.dist;
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