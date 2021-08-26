const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = generateGraph(edges);

  return DFS(graph, nodeA, nodeB, new Set());
};

const DFS = (graph, currentNode, dist, visited) => {
  if(currentNode === dist) return true;
  if(visited.has(currentNode)) return false;

  visited.add(currentNode);

  for(let neighbor of graph[currentNode]) {
    if(DFS(graph, neighbor, dist, visited)) return true;
  }
  return false;
}

const generateGraph = (edges) => {
  const graph = {};

  for(let edge of edges) {
    const [edgeOne, edgeTwo] = edge;

    if(!(edgeOne in graph)) graph[edgeOne] = [];
    if(!(edgeTwo in graph)) graph[edgeTwo] = [];
    graph[edgeOne].push(edgeTwo);
    graph[edgeTwo].push(edgeOne);
  }
  return graph;
}

















