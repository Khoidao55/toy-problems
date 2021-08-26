const connectedComponentsCount = (graph) => {
  // todo
  let visited = new Set();
  let count = 0;
  for(let node in graph) {
    if(DFS(graph, node, visited)) count++;
  }
  return count;
};

const DFS = (graph, node, visited) => {
  if(visited.has(node.toString())) return false;
  visited.add(node.toString());

  for(let neighbor of graph[node]) {
    DFS(graph, neighbor, visited);
  }

  return true;
}








